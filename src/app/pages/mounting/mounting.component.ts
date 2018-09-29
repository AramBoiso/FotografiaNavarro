import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-mounting',
  templateUrl: './mounting.component.html',
  styleUrls: ['./mounting.component.css']
})
export class MountingComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
