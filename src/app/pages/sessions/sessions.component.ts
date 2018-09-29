import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  realteBar:Array<any>;
  imageDefault:any;

  constructor(public images:ImagesService) {
    this.realteBar = images.sessions;
    this.imageDefault = this.realteBar[0];
   }

  ngOnInit() {
  }

  imageClik(i):void{
    this.imageDefault = this.realteBar[i];
  }

}
