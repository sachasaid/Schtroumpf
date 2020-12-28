import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddrowService } from 'src/app/addrow.service';
import { Friends } from 'src/app/friends';
import { FriendsService } from 'src/app/friends.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-box',
  templateUrl: './add-box.component.html',
  styleUrls: ['./add-box.component.scss']
})
export class AddBoxComponent {
  addForm: FormGroup;

  action: string;
  local_data: any;
  message: any
  user: any
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Friends,
    private dialogService: AddrowService, private friends: FriendsService,
    public _router: Router, public _location: Location) {
      console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.addForm = fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      family: ['', Validators.required],
      food: ['', Validators.required],
      race: ['', Validators.required],
    });
    }
    doAction(){
    this.user = this.addForm.value;
    this.friends.postFriends(this.user)
    .subscribe(
      (res) => {
        console.warn("result", res);
      } 
    )
    this.dialogRef.close({ event: this.action, data: this.local_data });
    this.dialogService.openSnackBar(this.message, 'body');
    this._router.navigateByUrl("/user", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    })
  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
