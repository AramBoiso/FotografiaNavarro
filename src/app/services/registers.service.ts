import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

   // OTHERS
   title:string; 
   showTable:boolean;
   showInput:boolean;
   showInput2:boolean;

    // BUTTONS 
    btnAdd:boolean;
    btnUD:boolean;
    btnVT:boolean;
    btnOT:boolean;
  
     // DATE  
     day:any;
     month:any;
     year:any;
     months:Array<any>;
     date:any;

     local:boolean;


  constructor(public afDB: AngularFireDatabase) { 

     this.title = "Agregar Compra";

     this.local = false;
  
     // BUTTONS
    
     this.btnAdd = false;
     this.btnVT = false;
  
     this.btnUD = true;
     this.btnOT = true;
     

     // Shows
     this.showTable = true;
     this.showInput = true;

     // MONTHS
     this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
     this.month= this.months[new Date().getMonth()];
     this.year = new Date().getFullYear();
     this.day = new Date().getDate();
  }

      //  GET DATE 
      getDate(){
        this.date = (this.year+'-'+this.month+'-'+this.day);
        return this.date;
      }

      viewTable(){
            this.showTable= false;
            this.btnOT = false;
            this.btnVT = true;
      }
      
      downTable(){
          this.showTable= true;
          this.btnOT = true;
          this.btnVT = false;
      }
  
}

