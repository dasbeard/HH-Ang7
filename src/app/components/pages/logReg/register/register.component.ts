import { Component, OnInit, Inject } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup
} from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
// import { GoogleMapsAPIWrapper } from "@agm/core";

import { OrganizationInfo } from "../../../../models/Location";
import { DataService } from "src/app/services/data.service";
import { UserModel } from "src/app/models/User";

export interface DialogData {
  orgInfo: OrganizationInfo;
  newUser: UserModel;
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  newOrg: OrganizationInfo = new OrganizationInfo();
  addressInput: String = "";
  isDisabled: Boolean = false;

  newUser: UserModel = new UserModel();

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dataService: DataService // private mapsWrapper: GoogleMapsAPIWrapper
  ) {}

  ngOnInit() {}

  register() {
    console.log("triggered");
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: "90%",
      maxWidth: "650px",
      data: {
        orgInfo: this.newOrg,
        newUser: this.newUser
      }
    });

    console.log(this.newOrg);

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result);

      if (result === "Registering") {
        // ! This is where we save and move to new page to continue registering services
        console.log(this.newOrg, this.newUser);

        /*
        
        !! This saves a NEW ORG
        this.dataService.registerNewOrganization(this.newOrg);

        !! Need to get User Info and send that to services to register New User
        */
      } else if (result === "Canceled") {
        console.log("Registration Canceled");
        this.newOrg = new OrganizationInfo();
        this.addressInput = "";
      }
    });
  }

  geolocateOnFocus() {
    console.log("On Focus Triggered");
    // TODO: figure out how to make a geoloation bounds so focus Auto Locate

    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       var geolocation = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       };
    //     });
    //   }
  }

  handleAddressChange(event) {
    this.newOrg.streetAddress1 =
      event.address_components[0].long_name +
      " " +
      event.address_components[1].long_name;
    this.newOrg.state = event.address_components[5].short_name;
    this.newOrg.city = event.address_components[3].long_name;
    this.newOrg.zipcode = event.address_components[7].long_name;
    this.newOrg.formattedAddress = event.formatted_address;

    // Get GeoLocation by placeID
    this.dataService.geoLocatePlace(event.place_id).subscribe(data => {
      this.newOrg.location = data.results[0].geometry.location;
    });

    if (event.formatted_phone_number) {
      this.newOrg.phone = event.formatted_phone_number;
    }
    if (event.name.substring(0, 2) != event.formatted_address.substring(0, 2)) {
      this.newOrg.title = event.name;
    }
    if (event.website) {
      this.newOrg.website = event.website;
    }
    // TODO: maybe photos?

    // Enable Button to continue registration
    this.isDisabled = false;
  }
}

@Component({
  selector: "./continueRegisterDialog",
  templateUrl: "./continueRegisterDialog.html",
  styleUrls: ["./continueRegisterDialog.component.css"]
})
export class RegisterDialog {
  verifyPassword: string;

  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close("Canceled");
  }

  onRegister() {
    this.dialogRef.close("Registering");
  }
}
