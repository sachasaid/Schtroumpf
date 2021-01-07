import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateInfoComponent } from 'src/app/box/update-info/update-info.component';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  login = '';
  age = '';
  family = '';
  race = '';
  food = '';
  constructor(private _authService: AuthserviceService, private _router: Router, public dialog: MatDialog) {
    this._authService.getLogin()
    .subscribe(
      data => this.login = data.toString(),
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
   }

  ngOnInit(): void {

  }

     openDialog(action: any, obj: any) {
    obj.action = action;
    let dialogRef = this.dialog.open(UpdateInfoComponent, {
      width: '800px',
      disableClose: true,
      data:obj
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Update'){
       window.location.reload();
      }
    });
  }

}
