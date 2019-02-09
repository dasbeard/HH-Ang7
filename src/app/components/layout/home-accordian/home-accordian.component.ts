import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from '../../../models/Location';

@Component({
  selector: 'app-home-accordian',
  templateUrl: './home-accordian.component.html',
  styleUrls: ['./home-accordian.component.css']
})
export class HomeAccordianComponent implements OnInit, OnChanges {
  panelOpenState = false;
  @Input() locations: Location[];

  allLocations: Location[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['locations']) {
      // console.log(this.locations);
      this.allLocations = this.locations;
    }
  }

}
