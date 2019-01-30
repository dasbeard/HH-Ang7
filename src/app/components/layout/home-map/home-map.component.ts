import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css']
})
export class HomeMapComponent implements OnInit {

  lat: number;
  lng: number;
  zoomLevel: number = 13;


  constructor() { }

  ngOnInit() {
    this.findMe();

  }


  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
