import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-school-package',
  templateUrl: './school-package.component.html',
  styleUrls: ['./school-package.component.css']
})
export class SchoolPackageComponent implements OnInit {

  thumbnails:Array<any>;

  constructor(public images:ImagesService) {  this.thumbnails = this.images.thumbnails;}

  ngOnInit() {
  }

}
