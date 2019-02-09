import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

// import { async } from 'q';
import { Observable, BehaviorSubject } from 'rxjs';
import { Location } from '../../../models/Location';
import { UserLocationModel } from '../../../models/UserLocationModel';
// import { DataServiceService } from '../../../services/data-service.service';
// import { User } from 'firebase';

@Component({
  selector: 'app-home-map',
  templateUrl: './home-map.component.html',
  styleUrls: ['./home-map.component.css']
})
export class HomeMapComponent implements OnInit {

  @Input() userLocationParent;
  @Input() locations: Location[];

  allLocations: Location[];
  markers = false;
  userMarker: boolean = false;

  defaultMapView: UserLocationModel = {
    latitude: 36.172482,
    longitude: -115.131619,
    zoomLevel: 5,
    icon: "../../../assets/Images/locationPinSmall.png",
  }
  // Old Icon URL:  http://maps.google.com/mapfiles/ms/icons/lightblue.png


  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userLocationParent']) {
      this.defaultMapView = this.userLocationParent;
      this.defaultMapView.icon = "../../../assets/Images/locationPinSmall.png";
    }

    if (changes['locations']) {
      // console.log(this.locations);
      this.allLocations = this.locations;
      this.markers = true;

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





  // updateLocation() {
  //   console.log('Update Location Running');
  //   this.defaultMapView.lat = this.userLocation.latitude;
  //   this.defaultMapView.lng = this.userLocation.longitude;
  //   this.defaultMapView.zoomLevel = this.userLocation.zoomLevel;
  //   this.defaultMapView.temp = true;
  //   console.log(this.defaultMapView.lat, this.defaultMapView.lng);

  // }









    // this.updateLocation();

    // setTimeout(e => {
    //   this.updateLocation()
    //   // console.log(this.userLocation);
    //   this.marker = true;
    //   console.log(this.locations);
    //   this.locationMarkers = true;
    // }, 1200
    // );