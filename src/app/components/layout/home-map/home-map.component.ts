import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userLocation, OrganizationInfo } from 'src/app/models/Location';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css']
})
export class HomeMapComponent implements OnInit {

  @Input() userLocation: userLocation;
  @Output() userGeoLocations = new EventEmitter();
  @Input() allOrgs: OrganizationInfo[];

  userMarker: boolean = false;


  constructor() {
    this.findMe();

  }

  ngOnInit() {

  }


  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userLocation.latitude = position.coords.latitude;
        this.userLocation.longitude = position.coords.longitude;
        this.userLocation.zoomLevel = 13;
        this.userGeoLocations.emit()
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  onMapZoom(event) {
    if (event <= 10) {
      this.userMarker = true;
    }
    if (event > 10) {
      this.userMarker = false;
    }
  }

}
