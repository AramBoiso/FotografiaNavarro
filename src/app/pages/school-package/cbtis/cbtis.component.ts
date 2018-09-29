import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-cbtis',
  templateUrl: './cbtis.component.html',
  styleUrls: ['./cbtis.component.css']
})
export class CbtisComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
