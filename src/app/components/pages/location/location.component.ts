import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { OrganizationInfo } from 'src/app/models/Location';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  orgId: String;

  private OrgDoc: AngularFirestoreDocument<OrganizationInfo>;
  // orgInfo: Observable<OrganizationInfo>;
  orgInfo: OrganizationInfo;

  constructor(private _route: ActivatedRoute, private dataService: DataService, private readonly afs: AngularFirestore) {
    this._route.paramMap.subscribe(param => {
      this.orgId = param.get('id');
    });


  }

  ngOnInit() {
    // console.log(this.orgId);

    this.dataService.getOneOrg(this.orgId).subscribe(async data => {
      this.orgInfo = await data;
      console.log(data);
    });


  }




}
