import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { OrganizationInfo } from "../models/Location";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Keys } from "../../../keys";
import { GeoLocation } from "../models/Geolocation";

export interface FullOrg extends OrganizationInfo {
  id: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  private organizationCollection: AngularFirestoreCollection<OrganizationInfo>;
  allOrganizations: Observable<FullOrg[]>;
  private OrgDoc: AngularFirestoreDocument<OrganizationInfo>;
  org: Observable<OrganizationInfo>;
  locationData: Observable<GeoLocation>;

  constructor(
    private readonly afs: AngularFirestore,
    private http: HttpClient
  ) {
    // this.organizationCollection = this.afs.collection("locations");
    this.organizationCollection = this.afs.collection<OrganizationInfo>(
      "locations"
    );
  }

  getAllLocations() {
    console.log("Get All Locations Called");
    // this.organizationCollection = this.afs.collection<OrganizationInfo>(
    //   "locations"
    // );
    this.allOrganizations = this.organizationCollection.snapshotChanges().pipe(
      map(action =>
        action.map(a => {
          const data = a.payload.doc.data() as OrganizationInfo;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    return this.allOrganizations;
  }

  getOneOrg(id: String) {
    console.log(id);

    this.OrgDoc = this.afs.doc(`locations/${id}`);
    // this.org = this.OrgDoc.valueChanges();
    return this.OrgDoc.valueChanges();

    // return this.org;
  }

  getAddressGeoLocation(address: String) {
    let url: string =
      "https://maps.googleapis.com/maps/api/geocode/json?address=";
    let urlKey: string = `&key=${Keys.apiKey2}`;

    // return this.http.get(url + address + urlKey);
    console.log(url + address + urlKey);
  }

  geoLocatePlace(placeId: String): Observable<GeoLocation> {
    let urlKey: string = `&key=${Keys.apiKey2}`;

    let url2: String =
      "https://maps.googleapis.com/maps/api/geocode/json?place_id=";

    // console.log(`${url2}${placeId}${urlKey}`);

    return this.http.get<GeoLocation>(`${url2}${placeId}${urlKey}`);
  }

  registerNewOrganization(newOrg: OrganizationInfo) {
    console.log("New Org Triggered", newOrg);
    let temp = JSON.parse(JSON.stringify(newOrg));

    this.organizationCollection.add(temp);

    /* 
      TODO: this saves, now need to return the ID and register the email/Password and add the paramter for the orgID
     */
  }
}
