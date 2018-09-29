import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
