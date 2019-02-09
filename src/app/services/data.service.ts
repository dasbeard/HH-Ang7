import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrganizationInfo } from '../models/Location';

export interface FullOrg extends OrganizationInfo { id: string }


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private organizationCollection: AngularFirestoreCollection<OrganizationInfo>;
  allOrganizations: Observable<FullOrg[]>;

  private OrgDoc: AngularFirestoreDocument<OrganizationInfo>;
  org: Observable<OrganizationInfo>;

  constructor(private readonly afs: AngularFirestore) { }

  getAllLocations() {
    console.log('Get All Locations Called');
    this.organizationCollection = this.afs.collection<OrganizationInfo>('locations');
    this.allOrganizations = this.organizationCollection.snapshotChanges().pipe(
      map(action => action.map(a => {
        const data = a.payload.doc.data() as OrganizationInfo;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
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


}
