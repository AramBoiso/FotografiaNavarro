import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {RegistersService} from '../../services/registers.service';

@Component({
  selector: 'app-branch-office2',
  templateUrl: './branch-office2.component.html',
  styleUrls: ['./branch-office2.component.css']
})
export class BranchOffice2Component {

   navi:boolean;
   setlocal:any;

   // REGISTER
   compras: any;
   compra:any;
   editing:boolean;
   purchasesOffline:any[];

   fmonth:any;
   fyear:any;
   fname:any;

   month:any;
   year:any;
   name:any;


   // filter
   filter:Array<any>;

  constructor(public rs:RegistersService, public afDB: AngularFireDatabase) {
    
     this.purchasesOffline = JSON.parse(localStorage.getItem('purchasesOffline2')); 
    
    if(this.purchasesOffline == undefined ){
      this.purchasesOffline = [];
      localStorage.setItem('purchasesOffline2',JSON.stringify(this.purchasesOffline));
    }else{
      localStorage.setItem('purchasesOffline2',JSON.stringify(this.purchasesOffline));  
    }
      
    this.navi = true;
    this.editing = false;

    this.fmonth = this.rs.month;
    this.fyear = this.rs.year;

     // REGISTERS
    this.compra = {
        id:null, date: null, name: null, phone: null, 
        package: null, cost: null, payment: null, type: null,
        subsidiary: '2',residuary: null, newPayment: null, s:'$',
        file: null, month: null, year:null
    };

  
     // Checking if it are online or offline
     if(navigator.onLine){
      this.getCompras()
      .subscribe( compras => {
            this.compras = compras;
            this.compras.reverse();
            this.filter = this.compras.filter( (e) => { return e.month == this.fmonth && e.year == this.fyear });

            localStorage.setItem('compras2',JSON.stringify(this.compras));
      });
   }else {
    this.compras = JSON.parse(localStorage.getItem('compras2')); 
    this.filter = this.compras.filter( (e) => { return e.month == this.fmonth  && e.year == this.fyear });
    }

   setInterval(() =>{
     if(navigator.onLine){
       this.navi = true;
      if(this.purchasesOffline.length > 0){
          
          this.syncronize();
         }
     }else{ this.navi = false; }
  }, 1000);

 } // end of consctructor

  // METODOS DEL REGISTRO  
 
  syncronize(){

    this.purchasesOffline.forEach((record)=>{
        switch(record.action){
          case 'add': this.afDB.database.ref('branchOffice2/'+record.id).set(record.purchase); break;
          case 'edit': this.afDB.database.ref('branchOffice2/'+record.id).set(record.purchase); break;
          case 'remove':  this.afDB.database.ref('branchOffice2/'+record.id).remove();  break;
          default: console.log('sin reacción');
        }
    });

    this.purchasesOffline.shift();
    localStorage.setItem('purchasesOffline2',JSON.stringify(this.purchasesOffline));
}

  // METODOS DEL REGISTRO  
    
    getCompras(){
      return this.afDB.list('/branchOffice2').valueChanges();
    }
  
    add(){       
      if(this.compra.cost == null){
        alert('Asegurese de llenar los siguientes campos: "Precio"');
      }else{ 

        if(this.compra.month === null ){ this.compra.month = this.rs.month; }
        if(this.compra.year === null){ this.compra.year = this.rs.year; }
        if(this.compra.date === null){this.compra.date = this.rs.getDate();}

        this.compra.id = Date.now();
  
  
        this.check();

          // Online or Offline
          if(navigator.onLine){  
               this.afDB.database.ref('branchOffice2/'+this.compra.id).set(this.compra);
               alert('Compra Agregada');
          }else {
                this.filter.unshift(this.compra);  
                this.compras.unshift(this.compra); 
                this.purchasesOffline.push( { id: this.compra.id, purchase: this.compra, action: 'add' } ); 
                localStorage.setItem('purchasesOffline2',JSON.stringify(this.purchasesOffline));
                localStorage.setItem('compras2',JSON.stringify(this.compras));
                alert('Compra Agregada');
           }  
      }   
          this.clean();
         
    }

    update(){ 
            this.check();
            if(navigator.onLine){
               this.afDB.database.ref('branchOffice2/'+this.compra.id).set(this.compra);
            }
            else{
              this.compras.forEach((compra)=>{
                if(compra.id == this.compra.id){ 
                   compra = this.compra; 
                   localStorage.setItem('compras2',JSON.stringify(this.compras));
                   this.purchasesOffline.push({ id: this.compra.id, purchase: this.compra, action: 'edit' } );
                   localStorage.setItem('purchasesOffline2',JSON.stringify(this.purchasesOffline));
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
            this.afDB.database.ref('branchOffice2/'+this.filter[i].id).remove();
            alert('Compra Eliminada');
          }
          else{ 
            this.purchasesOffline.push( { id: this.filter[i].id, action: 'remove' });
            localStorage.setItem('purchasesOffline2',JSON.stringify(this.purchasesOffline));

            var me = this;

            this.compras.forEach((compra, x)=>{

              if(me.filter[i].id === compra.id){
                console.log('Delete: ',me.compras[x]);
                 me.compras.splice(x,1);
                localStorage.setItem('compras2',JSON.stringify(me.compras));
               
              }

            });
            this.filter.splice(i,1);
            alert('Compra Eliminada');
          
          }
      }
      this.clean();
      
    }


    filt(){
  
      this.fmonth = this.month;
      this.fyear = this.year;
      this.fname = this.name;

      if(this.fname == null){ 
        this.filter = this.compras.filter( (e) => { return e.month == this.fmonth  && e.year == this.fyear});
       // this.boxCut();
       }else{
        this.filter = this.compras.filter( (e) => { return e.month == this.fmonth  && e.year == this.fyear && e.name== this.fname});
      //  this.boxCut();
       }
  
     if(this.filter.length <= 0){
        this.fmonth = this.rs.month;
        this.fyear = this.rs.year;
        this.filter = this.compras.filter( (e) => { return e.month == this.fmonth && e.year == this.fyear });
        this.month = null;
        this.year = null;
        this.name = null;
        alert('La tabla no contiene registros aún :C');
    }
  }
 
 

// Others Methods

  btnEdit(c){
    this.rs.title = 'Editar Compra';
    this.rs.btnAdd = true;
    this.rs.btnUD = false;
    this.compra = c;
    this.editing = true;
    this.rs.showInput = false;
  }
  
  check(){
      if(!this.editing){ //Aqui esta Agregando las Compras  .    
          //Verifica que payment("abono") se guarde como null.
          if(this.compra.payment == null){ this.compra.payment = 0; }
      }else{ // Aqui esta Actualizando los datos.
          this.filter.forEach((el) => {
              if(el.id == this.compra.id){
                    if(this.compra.newPayment == null){ 
                          this.compra.newPayment = 0; 
                          this.compra.payment += this.compra.newPayment;
                  }else{ this.compra.payment += this.compra.newPayment;   }
              } 
          });
          //Limpia el Campo de Nuevo Abono
          this.compra.newPayment = null;
      }        
        // Guarda el valor restante de la compra.
        this.compra.residuary = this.compra.cost - this.compra.payment;

        // Comprueba si el pago ya esta liquidado o no.
        if(this.compra.residuary == 0){ this.compra.residuary = 'Pagado';  this.compra.s = ''; }
        else{ this.compra.s = '$'; }
  }

  clean(){

    this.rs.title = "Agregar Compra";
    this.rs.btnAdd = false;
    this.rs.btnUD = true;
    this.rs.showInput = true;
    this.editing = false;

    this.compra = {
      id:null, date: null, name: null, phone: null, 
      package: null, cost: null, payment: null, type: null,
      subsidiary: '2',residuary: null, newPayment: null,
      file: null, month: null, year:null
    }; 
   
  }

}