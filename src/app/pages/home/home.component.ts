import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: number = 19.699783;
  lng: number = -103.464580;

  lat2: number = 19.725693;
  lng2: number = -103.461514;

  zoom: number = 17;
  zoom2: number = 15;

  markers: marker[] = [
    {
     name: 'Sucursal 1',
     lat:  19.699621,
     lng: -103.464680,
     draggable: true

  },
  {
    name: 'Sucursal 2',
    lat:  19.726165,
    lng: -103.459223,
    draggable: true

 }

];

  constructor() { }

  ngOnInit() { }

}

interface marker{
  name?: string;
  lat: number;
  lng:number;
  draggable: boolean;
 

}
