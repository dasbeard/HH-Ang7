import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { OrganizationInfo } from '../../../../models/Location'

export interface DialogData {
  animal: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  newOrg = new OrganizationInfo;

  animal: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }


  register() {
    console.log('triggered');
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '80%',
      maxWidth: '650px',
      data: {
        streetAddress1: this.newOrg.streetAddress1,
        streetAddress2: this.newOrg.streetAddress2,
        city: this.newOrg.city,
        zipcode: this.newOrg.zipcode,
      }
    });

    console.log(this.newOrg);


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.newOrg);

      // this.animal = result;
    });
  }

}


@Component({
  selector: 'continueRegisterDialog',
  templateUrl: 'continueRegisterDialog.html',
})
export class RegisterDialog {

  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}