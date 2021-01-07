import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Friends } from 'src/app/shared/friends';
import { Location } from '@angular/common';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss']
})
export class UpdateInfoComponent {
 myForm: FormGroup;  
  action: string;
  local_data: any;
  user: any
  login = '';
  password = '';
  age = '';
  family = '';
  race = '';
  food = '';
  constructor(private _authService: AuthserviceService, public dialogRef: MatDialogRef<UpdateInfoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Friends,
    private authService: AuthserviceService,
    public _router: Router, public _location: Location) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.myForm = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null),
      age: new FormControl(null),
      family: new FormControl(null),
      race: new FormControl(null),
      food: new FormControl(null),
        });
      this._authService.getLogin()
        .subscribe(
          data => {
            this._authService.getLogin()
              .subscribe(
                data => this.login = data.toString(),
                error => this._router.navigate(['../loginUser'])

              )
              this._authService.getPassword()
              .subscribe(
                data => this.password = data.toString(),
                error => this._router.navigate(['../loginUser'])

              )
              this._authService.getAge()
              .subscribe(
                data => this.age = data.toString(),
                error => this._router.navigate(['../loginUser'])

              )
              this._authService.getFamily()
              .subscribe(
                data => this.family = data.toString(),
                error => this._router.navigate(['../loginUser'])

              )
              this._authService.getFood()
              .subscribe(
                data => this.food = data.toString(),
                error => this._router.navigate(['../loginUser'])

              )
              this._authService.getRace()
              .subscribe(
                data => this.race = data.toString(),
                error => this._router.navigate(['../loginUser'])
              )
      },
      error => this._router.navigate(['../loginUser'])
    )
    }
    doAction(){
    if (this.myForm.valid) {
          this.authService.postinfo(this.myForm.value)
          .subscribe(
            data => this.closeDialog(),
            error => {}
          )
        }
        console.log(this.myForm.value);
    }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
