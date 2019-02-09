import { Component, OnInit, Input } from '@angular/core';
import { OrganizationInfo } from 'src/app/models/Location';

@Component({
  selector: 'app-home-accordian',
  templateUrl: './home-accordian.component.html',
  styleUrls: ['./home-accordian.component.css']
})
export class HomeAccordianComponent implements OnInit {
  panelOpenState = false;

  @Input() allOrgs: OrganizationInfo[];

  constructor() { }

  ngOnInit() {
    console.log('init');

  }

}
