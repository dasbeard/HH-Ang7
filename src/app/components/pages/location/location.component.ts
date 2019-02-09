import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Services, GeoLocation } from '../../../models/Location';
// import { Location, LocationInterface } from '../../../models/Location';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LocationInterface {
  // id?: number;
  title?: string;
  website?: string;
  userEmail?: string;
  contactEmail?: string;
  phone?: number;
  // fullAddress?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  neighborhood?: string;
  state?: string;
  zipcode?: number;
  country?: string;
  aboutUs?: string;
  services?: Services;
  otherServices?: string;
  location?: GeoLocation;
};




@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})


export class LocationComponent implements OnInit, OnChanges {

  private orgId: String;
  private OrgDoc: AngularFirestoreDocument;
  org: Observable<LocationInterface>;
  temp: LocationInterface;

  constructor(private _route: ActivatedRoute, private readonly afs: AngularFirestore) {

    this._route.paramMap.subscribe(params => {
      this.orgId = params.get('id');
    });
  }

  ngOnInit() {

    console.log(this.orgId);
    this.OrgDoc = this.afs.doc(`locations/${this.orgId}`);
    this.org = this.OrgDoc.valueChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['org']) {
      this.org = this.org;
    }

  }


};