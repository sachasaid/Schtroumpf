import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Friends } from 'src/app/shared/friends';
import { Location } from '@angular/common';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-add-box',
  templateUrl: './add-box.component.html',
  styleUrls: ['./add-box.component.scss']
})
export class AddBoxComponent {
   myForm: FormGroup;  
   serverErrorMessages: string | undefined;
  action: string;
  local_data: any;
  user: any
  constructor(public dialogRef: MatDialogRef<AddBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Friends,
    private authService: AuthserviceService,
    public _router: Router, public _location: Location) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.myForm = new FormGroup({
          login: new FormControl(null, Validators.required),
          password: new FormControl(null, Validators.required),
        });
    }
    doAction(){
    if (this.myForm.valid) {
          this.authService.submitRegister(this.myForm.value)
          .subscribe(
            data => this.closeDialog(),
            error => {
              if (error.status === 422) {
                this.serverErrorMessages = "LOGIN ALREADY EXIST";
                this.myForm.reset();
              }
            }
          )
        }
        console.log(this.myForm.value);
    }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
