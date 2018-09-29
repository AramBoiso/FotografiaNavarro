import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../../services/images.service';

@Component({
  selector: 'app-cus',
  templateUrl: './cus.component.html',
  styleUrls: ['./cus.component.css']
})
export class CusComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
