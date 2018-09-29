import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {RegistersService} from '../../services/registers.service';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})

export class BranchOfficeComponent implements OnInit {

    // OTROS
    title:string; 
    showTable:boolean;
    showInput:boolean;
    navi:boolean;

    fmonth:any;
    fyear:any;
    fname:any;

    month:any;
    year:any;
    name:any;
    gain:any;
   
    // BOTONES  
    buttonOcultTable:boolean;
    buttonViewTable:boolean;
    buttonToUpDate:boolean;
    buttonAdd:boolean;
  
    // Registros
    compras: any;
    compra:any;
    purchasesOffline:Array<any>;
    editing:boolean;


     // filter
   filter:Array<any>;

  constructor(public rs:RegistersService, public afDB: AngularFireDatabase) { 

        this.purchasesOffline = JSON.parse(localStorage.getItem('purchasesOffline')); 
      
        if(this.purchasesOffline == undefined ){
          this.purchasesOffline = [];
          localStorage.setItem('purchasesOffline',JSON.stringify(this.purchasesOffline));
        }else{
          localStorage.setItem('purchasesOffline',JSON.stringify(this.purchasesOffline));  
        }

        
          this.fmonth = this.rs.month;
          this.fyear = this.rs.year;
          this.gain = 0;
          
        
       
         // EXTRAS
         this.title = "Agregar Compra";
         this.showTable = true;
         this.editing = false;
         this.showInput = true;

          // BOTONES
        this.buttonOcultTable = true;
        this.buttonViewTable = false;
        this.buttonAdd = false;
        this.buttonToUpDate = true;

        this.navi = true;

          // Registros
       this.compra = {
             id:null, fecha: null, nombre: null, telefono: null, sucursal: '1',
             paquete: null, costo:  null, abono: null, tipo: null, year:null,
             restante: null, nuevoAbono: null, s:'$', archivo:null, mes: null
       };

          // Checking if it are online or offline
       if(navigator.onLine){
          this.getCompras()
          .subscribe( compras => {

                this.compras = compras;
                this.compras.reverse();
                this.filter = this.compras.filter( (e) => { return e.mes == this.fmonth && e.year == this.fyear });
               // this.boxCut();
                localStorage.setItem('compras',JSON.stringify(this.compras));
               
          });
       }else {
          this.compras = JSON.parse(localStorage.getItem('compras')); 
          this.filter = this.compras.filter( (e) => { return e.mes == this.fmonth  && e.year == this.fyear });
        //  this.boxCut();
      }

       setInterval(() =>{
         if(navigator.onLine){
           this.navi = true;
           if(this.purchasesOffline.length > 0){ this.syncronize(); }
          
         }else{ this.navi = false; }
      }, 1000);

  }

  ngOnInit() {

  }

  syncronize(){
    
  
      this.purchasesOffline.forEach((record)=>{
          switch(record.action){
            case 'add': this.afDB.database.ref('branchOffice/'+record.id).set(record.purchase); break;
            case 'edit': this.afDB.database.ref('branchOffice/'+record.id).set(record.purchase); break;
            case 'remove':  this.afDB.database.ref('branchOffice/'+record.id).remove();  break;
            default: console.log('sin reacción');
          }
      });

      this.purchasesOffline.shift();
      localStorage.setItem('purchasesOffline',JSON.stringify(this.purchasesOffline));
  }

    // METODOS DEL REGISTRO  
      
      getCompras(){
        return this.afDB.list('/branchOffice').valueChanges();
      }
    
      add(){       
        if(this.compra.costo == null){
          alert('Asegurese de llenar los siguientes campos: "Precio"');
        }else{ 

          if(this.compra.mes === null ){ this.compra.mes = this.rs.month; }
          if(this.compra.year === null){ this.compra.year = this.rs.year; }
          if(this.compra.fecha === null){this.compra.fecha = this.rs.getDate();}

          this.compra.id = Date.now();
    
          this.check();

            // Online or Offline
            if(navigator.onLine){  
              
               this.afDB.database.ref('branchOffice/'+this.compra.id).set(this.compra);
               alert('Compra Agregada');
              
            }else {
                  this.filter.unshift(this.compra);  
                  this.compras.unshift(this.compra);    
                  this.purchasesOffline.push( { id: this.compra.id, purchase: this.compra, action: 'add' } );   
                  localStorage.setItem('purchasesOffline',JSON.stringify(this.purchasesOffline));
                  localStorage.setItem('compras',JSON.stringify(this.compras));
                  alert('Compra Agregada');
             }  
        }  
            this.clean();
           
      }

      toUpDate(){ 
              this.check();
              if(navigator.onLine){
                 this.afDB.database.ref('branchOffice/'+this.compra.id).set(this.compra);
              }
              else{
                this.compras.forEach((compra)=>{
                  if(compra.id == this.compra.id){ 
                     compra = this.compra; 
                     localStorage.setItem('compras',JSON.stringify(this.compras));
                     this.purchasesOffline.push({ id: this.compra.id, purchase: this.compra, action: 'edit' });
                     localStorage.setItem('purchasesOffline',JSON.stringify(this.purchasesOffline));
                    }
                });

              }
             this.clean();
             alert('Compra Actualizada');
      }

      remove(i){
        var answer = confirm('Estas seguro de eliminar el registro?');

        if(answer){
            if(navigator.onLine){
              this.afDB.database.ref('branchOffice/'+this.filter[i].id).remove();
              alert('Compra Eliminada');
            }
            else{  

              this.purchasesOffline.push( { id: this.filter[i].id, action: 'remove' } );
              localStorage.setItem('purchasesOffline',JSON.stringify(this.purchasesOffline));

              var me = this;

              this.compras.forEach((compra, x)=>{

                if(me.filter[i].id === compra.id){
                  console.log('Delete: ',me.compras[x]);
                   me.compras.splice(x,1);
                  localStorage.setItem('compras',JSON.stringify(me.compras));
                 
                }

              });
              this.filter.splice(i,1);  
              alert('Compra Eliminada');
            }
        }
        this.clean();
        
      }
   
  
  // METODOS DE INTERACCION

  boxCut(){
    this.filter.forEach((compra, x)=>{

        if(compra.restante == 'Pagado'){
          this.gain += compra.costo;
        }

    });

    console.log('Ganancia del mes: ',this.gain);
  }

  filt(){
  
      this.fmonth = this.month;
      this.fyear = this.year;
      this.fname = this.name;

      if(this.fname == null){ 
        this.filter = this.compras.filter( (e) => { return e.mes == this.fmonth  && e.year == this.fyear});
       // this.boxCut();
       }else{
        this.filter = this.compras.filter( (e) => { return e.mes == this.fmonth  && e.year == this.fyear && e.nombre == this.fname});
      //  this.boxCut();
       }

      
  
     if(this.filter.length <= 0){
        this.fmonth = this.rs.month;
        this.fyear = this.rs.year;
        this.filter = this.compras.filter( (e) => { return e.mes == this.fmonth && e.year == this.fyear });
       // this.boxCut();

        this.month = null;
        this.year = null;
        this.name = null;
        alert('La tabla no contiene registros aún :C');
    }
  }

  edit(c){
    this.title = 'Editar Compra';
    this.buttonAdd = true;
    this.buttonToUpDate = false;
    this.compra = c;
    this.editing = true;
    this.showInput = false;

}

    viewTable(){
          this.showTable= false;
          this.buttonOcultTable = false;
          this.buttonViewTable = true;
    }
    
    downTable(){
        this.showTable= true;
        this.buttonOcultTable = true;
        this.buttonViewTable = false;
    }


    clean(){
        this.title = "Agregar Compra";
        this.buttonAdd = false;
        this.buttonToUpDate = true;
        this.showInput = true;
        this.editing = false;

        this.compra = {
          fecha: null, nombre: null, telefono: null, 
          paquete: null, costo: null, abono: null, tipo:null,
          sucursal:'1', restante: null, nuevoAbono: null,
          archivo:null, mes: null,  year:null
        }; 
    }

    check(){
      if(!this.editing){ //Aqui esta Agregando las Compras  .    
          //Verifica que payment("abono") se guarde como null.
          if(this.compra.abono == null){ this.compra.abono = 0; }
      }else{ // Aqui esta Actualizando los datos.
          this.filter.forEach((el) => {
              if(el.id == this.compra.id){
                    if(this.compra.nuevoAbono == null){ 
                          this.compra.nuevoAbono = 0; 
                          this.compra.abono += this.compra.nuevoAbono;
                  }else{ this.compra.abono += this.compra.nuevoAbono;   }
              } 
          });
          //Limpia el Campo de Nuevo Abono
          this.compra.nuevoAbono = null;
      }        
        // Guarda el valor restante de la compra.
        this.compra.restante = this.compra.costo - this.compra.abono;

        // Comprueba si el pago ya esta liquidado o no.
        if(this.compra.restante == 0){ this.compra.restante = 'Pagado';  this.compra.s = ''; }
        else{ this.compra.s = '$'; }
  }

}
