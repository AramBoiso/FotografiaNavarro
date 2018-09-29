import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SchoolPackageComponent } from './pages/school-package/school-package.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { MountingComponent } from './pages/mounting/mounting.component';
import { IdentificationComponent } from './pages/identification/identification.component';

import {routes} from './routes/routes';

import {ImagesService} from './services/images.service';
import {RegistersService} from './services/registers.service';
import {LoginService} from './services/login.service';


import { CbtisComponent } from './pages/school-package/cbtis/cbtis.component';
import { CusComponent } from './pages/school-package/cus/cus.component';
import { TecComponent } from './pages/school-package/tec/tec.component';
import { UniverComponent } from './pages/school-package/univer/univer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BranchOfficeComponent } from './pages/branch-office/branch-office.component';
import { BranchOffice2Component } from './pages/branch-office2/branch-office2.component'

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {FormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { CoruselComponent } from './components/corusel/corusel.component'


var config = {
  apiKey: "AIzaSyDBN7FmybBuCOrh6Wf318yG_QIumenkBfA",
  authDomain: "fotografia-navarro.firebaseapp.com",
  databaseURL: "https://fotografia-navarro.firebaseio.com",
  projectId: "fotografia-navarro",
  storageBucket: "fotografia-navarro.appspot.com",
  messagingSenderId: "666719054183"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SchoolPackageComponent,
    SessionsComponent,
    MountingComponent,
    IdentificationComponent,
    CbtisComponent,
    CusComponent,
    TecComponent,
    UniverComponent,
    AdminComponent,
    BranchOfficeComponent,
    BranchOffice2Component,
    CoruselComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqOG8IyavjBDut2qTMyMj8wRCAQ-nXL2s'
    })
  ],
  providers: [ImagesService, RegistersService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
