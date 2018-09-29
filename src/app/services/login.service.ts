import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  email:any;
  password:any;
  auth:boolean;

  user:Observable<firebase.User>;

  constructor(public af:AngularFireAuth) {

        this.af.authState.subscribe(
          (auth) =>{
            if(auth != null){
              this.user = this.af.authState;
              this.auth = true;
            }
          }
        )  
      }

    login(){
      this.af.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res =>{
          window.location.replace("/admin");
      })
      .catch(error =>{
        console.log(error);
      })    
    }

    logOut(){
      this.af.auth.signOut();
      this.auth = false;
      this.email = null;
      this.password = null;
      window.location.replace("/login");
      
    }

 }

