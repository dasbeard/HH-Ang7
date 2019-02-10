import { Component, OnInit, Input } from '@angular/core';
import { OrgServices } from 'src/app/models/Location';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() orgServices: OrgServices;

  beds: boolean = true;


  constructor() { }

  ngOnInit() {
    console.log(this.orgServices);

  }

}
