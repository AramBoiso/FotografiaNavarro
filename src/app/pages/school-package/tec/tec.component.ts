import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../../services/images.service';

@Component({
  selector: 'app-tec',
  templateUrl: './tec.component.html',
  styleUrls: ['./tec.component.css']
})
export class TecComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
