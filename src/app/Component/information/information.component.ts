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
  constructor(private _authService: AuthserviceService, private _router: Router) {
    this._authService.getLogin()
    .subscribe(
      data => this.login = data.toString(),
      error => this._router.navigate(['../loginUser'])
    )
   }

  ngOnInit(): void {
  }

}
