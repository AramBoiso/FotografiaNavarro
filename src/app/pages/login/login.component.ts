import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   // LOGIN
   email:any;
   password:any;

  constructor(public lS:LoginService) {

  }

      ngOnInit() {
        
      }

      logIn(){
        this.lS.email = this.email;
        this.lS.password = this.password;
        this.lS.login();
      }


}
