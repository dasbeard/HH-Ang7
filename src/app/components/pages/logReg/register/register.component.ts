import { Component, OnInit, Inject } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup
} from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { OrganizationInfo } from "../../../../models/Location";

export interface DialogData {
  animal: string;
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  newOrg = new OrganizationInfo();

  animal: string;
  geolocation;

  isDisabled: Boolean = true;

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit() {}

  register() {
    console.log("triggered");
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: "80%",
      maxWidth: "650px",
      data: this.newOrg
    });

    console.log(this.newOrg);

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(this.newOrg);

      // this.animal = result;
    });
  }

  geolocate() {
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
    console.log(event);
    this.newOrg.streetAddress1 =
      event.address_components[0].long_name +
      " " +
      event.address_components[1].long_name;
    this.newOrg.state = event.address_components[5].short_name;
    this.newOrg.city = event.address_components[2].long_name;
    this.newOrg.zipcode = event.address_components[7].long_name;
    this.newOrg.formattedAddress = event.formatted_address;
    if (event.formatted_phone_number) {
      this.newOrg.phone = event.formatted_phone_number;
    }
    if (event.name) {
      this.newOrg.title = event.name;
    }
    if (event.website) {
      this.newOrg.website = event.website;
    }
    // TODO: maybe photos?
    this.isDisabled = false;
  }
}

@Component({
  selector: "continueRegisterDialog",
  templateUrl: "continueRegisterDialog.html"
})
export class RegisterDialog {
  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
