import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../../services/images.service';

@Component({
  selector: 'app-univer',
  templateUrl: './univer.component.html',
  styleUrls: ['./univer.component.css']
})
export class UniverComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
