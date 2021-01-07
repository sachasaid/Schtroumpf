import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _authService: AuthserviceService, private _router: Router) {
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

}
