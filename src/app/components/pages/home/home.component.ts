import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from '../../../services/data-service.service';
import { Location } from '../../../models/Location';
import { UserLocationModel } from '../../../models/UserLocationModel';

import { last } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLocation: UserLocationModel = {
    latitude: 0,
    longitude: 0,
    zoomLevel: 13
  };

  locations: Location[];

  constructor(private dataService: DataServiceService) {
    this.findMe();

    this.getAllLocations();
  }

  ngOnInit() {

    // this.findMe();

    // this.getAllLocations();

  }

  findMe() {
    console.log('Locating User');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);

        this.userLocation.latitude = position.coords.latitude;
        this.userLocation.longitude = position.coords.longitude;
        // console.log(this.userLocation);

        // TODO: Send location to backend to find nearby locations

      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }



  async getAllLocations() {
    await this.dataService.getItems().subscribe(locations => {
      this.locations = locations;
      console.log(this.locations);
    });
  }

}
