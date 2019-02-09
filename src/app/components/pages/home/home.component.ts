import { Component, OnInit } from '@angular/core';
import { OrganizationInfo, userLocation } from 'src/app/models/Location';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLocation: userLocation = {
    latitude: 0,
    longitude: 0,
    zoomLevel: 0
  };

  allLocations: OrganizationInfo[];


  constructor(private readonly dataService: DataService) {
  }

  ngOnInit() {

  }

  userGeoLocation(location) {
    console.log(location);
    this.getAllLocations();
  }

  getAllLocations() {
    this.dataService.getAllLocations().subscribe(locations => {
      this.allLocations = locations;
      console.log(this.allLocations);

    })
  }



}
