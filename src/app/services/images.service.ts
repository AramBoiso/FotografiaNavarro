import { Injectable } from '@angular/core';


const SchoolPackage = 'https://firebasestorage.googleapis.com/v0/b/fotografia-navarro.appspot.com/o/schoolPackage%2F';
const Sessions = 'https://firebasestorage.googleapis.com/v0/b/fotografia-navarro.appspot.com/o/sessions%2F';
const Identification = 'https://firebasestorage.googleapis.com/v0/b/fotografia-navarro.appspot.com/o/identification%2F';
const Restauration = 'https://firebasestorage.googleapis.com/v0/b/fotografia-navarro.appspot.com/o/restauration%2F';

@Injectable()
export class ImagesService {

  thumbnails:Array<any>;
  sessions:Array<any>;
  restaurations:Array<any>;
  schoolPackage:any;
  identification:any;
  coruselImages:any;


  constructor() {
    
    this.thumbnails = [
      {
      title:'CBTIS 226', description:'Paquetes CBTis 226', alt:'CBTis 226 logo', route:'/cbtis',
      imgUrl:`${SchoolPackage}`+'cbtis.jpg?alt=media&token=564849d5-2109-42dc-aacc-3b2af8df91c6'
      },
      {
        title:'ITG', description:'Paquetes ITG', alt:'ITG logo',  route:'/tecnologico',
        imgUrl:`${SchoolPackage}`+'tec.png?alt=media&token=219c8060-db49-48c0-ab62-63d60657d49d'
      },
      {
        title:'CuSur', description:'Paquetes  CuSur', alt:'CuSur logo',  route:'/cusur',
        imgUrl:`${SchoolPackage}`+'cus.jpg?alt=media&token=6b9729e6-8697-480c-aceb-24e0f8a8e42c'
      },
       {
        title:'Univer', description:'Paquetes Univer', alt:'Univer logo',  route:'/univer',
        imgUrl:`${SchoolPackage}`+'univer.jpg?alt=media&token=c35fd2c1-a21f-44eb-b0ad-e4d0fc48f1fe'
      }
      
    ];

    this.sessions = [
      {title:'Bodas', description:'Sesiones de Boda', alt:'Boda',
       img:`${Sessions}`+'boda.jpg?alt=media&token=4a9e5270-2d25-4bc0-b468-444414a9ae86',
       active : false
      },
      {
       title:'XV años', description:'Xv años', alt:'Xv años',
       img:`${Sessions}`+'xv.jpg?alt=media&token=109c451b-0e88-48fb-9339-53835b0203c0',
       active : false
    },
      {
        title:'Sesiones', description:'Sesiones Personalizadas', alt:'Sesiones',
        img:`${Sessions}`+'sesion.jpg?alt=media&token=9f6a9487-b6d8-4421-bd83-70a3fa83b50c',
       active : false
      },
      {
        title:'Bautizos', description:'Bautizos', alt:'Bautizos',
        img:`${Sessions}`+'bautizo.jpg?alt=media&token=2a60564d-bb69-42bd-9d1a-81a07b428a7a',
        active : false
        },
      {
        title:'Primera Comunión', description:'Primera Comunion', alt:'Primera Comunion',
        img:`${Sessions}`+'primera.jpg?alt=media&token=220d1409-921c-43ca-b04f-59a7dfd7b33e',
        active : true
        }
    ];

    this.schoolPackage = {
      cb:`${SchoolPackage}`+'muestrario-cbtis.jpg?alt=media&token=e2cf28ec-6d20-4dd0-8417-4fb5cf63fc58',
      tec:`${SchoolPackage}`+'muestrario-tec.jpg?alt=media&token=2306d2b0-667c-4e08-a301-45526697e871',
      cusCard:`${SchoolPackage}`+'Credencial.jpg?alt=media&token=b2bf3bb2-0124-4b05-9881-f383e91ded84',
      cusIn:`${SchoolPackage}`+'Infantil.jpg?alt=media&token=cf75625b-6bdd-44f9-a1cd-201889d900f3',
      cusTitle:`${SchoolPackage}`+'Titulo.jpg?alt=media&token=cf3a1d94-9d84-41ac-85d7-e27b4331a682',
      cusPackage:`${SchoolPackage}`+'Paquete.jpg?alt=media&token=5e81a497-c6f5-43e5-89e4-cb3824197f61',
      cusPackageCus:`${SchoolPackage}`+'Paquetes-Cusur.jpg?alt=media&token=9a3fdcfc-73fc-4645-a374-3031d32757dd',
      uni:`${SchoolPackage}`+'muestrario-univer.jpg?alt=media&token=608b5525-a78b-4532-9223-b154fb0529a2'
    };

    this.identification = {
      card1:`${Identification}`+'Credencial-01.jpg?alt=media&token=9d2390ac-4bd6-4e7d-a70e-46682f44459b',
      card2:`${Identification}`+'Credencial-02.jpg?alt=media&token=1262315c-8ef5-42a9-b52d-06de04467c90',
      cardOval1:`${Identification}`+'Credencial-Oval-01.jpg?alt=media&token=ff010889-8761-4e93-be95-838850449ded',
      cardOval2:`${Identification}`+'Credencial-Oval-02.jpg?alt=media&token=77df045e-dc6f-43de-a26e-7f8c8329fdac',
      diploma:`${Identification}`+'Diploma-01.jpg?alt=media&token=f17bb314-8524-4cd2-9f43-ce55b078931e',
      infantil1:`${Identification}`+'Infantil-01.jpg?alt=media&token=722e1d62-700d-44c4-ac40-f85dfc290fb1',
      infantil2:`${Identification}`+'Infantil-01.jpg?alt=media&token=722e1d62-700d-44c4-ac40-f85dfc290fb1',
      pasaporte1:`${Identification}`+'Pasaporte-01.jpg?alt=media&token=313c9007-c7c9-497b-92f2-6c580dc41c3f',
      pasaporte2:`${Identification}`+'Pasaporte-02.jpg?alt=media&token=ce221ddd-e8c4-4415-ad84-39ffd754d187',
      titulo1:`${Identification}`+'Titulo-01.jpg?alt=media&token=9ba466c0-1506-4e7d-a93f-04577afed5a9',
      titulo2:`${Identification}`+'Titulo-01.jpg?alt=media&token=9ba466c0-1506-4e7d-a93f-04577afed5a9',
      titulo3:`${Identification}`+'Titulo-03.jpg?alt=media&token=cd8ec4af-ee2c-40d2-aec3-0439c85b0130',
      tituloOval1:`${Identification}`+'Titulo-Oval-01.jpg?alt=media&token=af88dc0b-2890-4a90-94ad-dd22a9d6dbd8',
      tituloOval2:`${Identification}`+'Titulo-Oval-02.jpg?alt=media&token=a3f18ab9-a5ed-4ecd-8ad7-dd2aef812bdf',
      visa:`${Identification}`+'Titulo-Oval-02.jpg?alt=media&token=a3f18ab9-a5ed-4ecd-8ad7-dd2aef812bdf'
    };
    this.restaurations = [
      {
        original:`${Restauration}`+'Untitled-1.jpg?alt=media&token=ad8f4a46-c9f4-48e7-888e-291b4339698f' , 
        restaurada:`${Restauration}`+'Untitled-1-r.jpg?alt=media&token=056072f7-7f9a-4db5-9e4f-b40e4d73fefd' 
      },
      {
        original:`${Restauration}`+'Untitled-2.jpg?alt=media&token=b661ee57-aa8d-4430-9649-0d275f2e0eec' , 
        restaurada:`${Restauration}`+'Untitled-2-r.jpg?alt=media&token=9ae5fd51-973b-4c4c-80a3-657b59cc52fe' 
      },
      {
        original:`${Restauration}`+'Untitled-3.jpg?alt=media&token=a8723ffc-67b2-4499-9393-1399fcc3aff8' , 
        restaurada:`${Restauration}`+'Untitled-3-r.jpg?alt=media&token=2bed2f58-192c-4029-8d4a-6ad92c5aded3' 
      }
  ];

    
   }

  

}
