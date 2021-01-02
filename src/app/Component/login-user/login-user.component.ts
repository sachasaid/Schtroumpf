import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  loginForm: FormGroup
  constructor(private authService: AuthserviceService, private _router: Router, private _activatedRoute: ActivatedRoute ) {
    this.loginForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
   }

  ngOnInit(): void {
  }

    isValid(controlName: any) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token', data.toString());
        },
        error => {}
      )
      this._router.navigate(['../info']);
    }

  }
    movetoRegister() {
    this._router.navigate(['../register'], {relativeTo: this._activatedRoute});
  }

}
