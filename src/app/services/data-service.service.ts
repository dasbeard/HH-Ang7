import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '../models/Location'

// export interface Shirt { name: string; price: number; }
export interface LocationId extends Location { id: string; }


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private locationsCollection: AngularFirestoreCollection<Location>;
  locations: Observable<LocationId[]>;

  private OrgDoc: AngularFirestoreDocument<Location>;
  org: Observable<Location>;


  constructor(private readonly afs: AngularFirestore) {

    this.locationsCollection = afs.collection<Location>('locations');
    this.locations = this.locationsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Location;
        const id = a.payload.doc.id;
        // console.log({ id, ...data });

        return { id, ...data };
      }))
    );
    // console.log(this.locations);

  }

  getItems() {
    console.log('Get Items - DataService Called');
    return this.locations;
  }

  getOrgContent(id) {
    console.log(id);

    this.OrgDoc = this.afs.doc(`locations/${id}`);
    this.org = this.OrgDoc.valueChanges();
    console.log(this.org);
  }






  // * Was used for Testing
  // getItems2() {
  //   this.locationsCollection = this.afs.collection<Location>('locations');
  //   this.locations = this.locationsCollection.snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as Location;
  //       const id = a.payload.doc.id;
  //       console.log(this.locations);
  //       return { id, ...data };
  //     }))
  //   );
  // }

}


