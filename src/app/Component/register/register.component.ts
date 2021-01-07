import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  myForm: FormGroup;
  successMessage: boolean | undefined;
  serverErrorMessages: string | undefined;

  constructor(private authService: AuthserviceService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cfpassword: new FormControl(null, this.passValid)
    });
    this.myForm.controls.password.valueChanges
    .subscribe (
      x => this.myForm.controls.cfpassword.updateValueAndValidity()
    )
   }

    ngOnInit() {
  }
  isValid(controlName: any) {
    return this.myForm.get(controlName)?.invalid && this.myForm.get(controlName)?.touched;
  }

  passValid(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cfpassword = control.value;

      const passCtrl = control.root.get('password');
      if (passCtrl) {
        const passVal  = passCtrl.value;
        if (passVal !== cfpassword || passVal === '') {
          return {
            isError: true
          }
        }
      }
    }
    return null;
  }
    movetoLogin() {
      this._router.navigateByUrl('/loginUser');
  }

  register() {
    if (this.myForm.valid) {
      this.authService.submitRegister(this.myForm.value)
      .subscribe(
        data => {
                this.successMessage = true;
                setTimeout(()=>{                           //<<<---using ()=> syntax
                      this.successMessage = false;
                      this._router.navigateByUrl('/loginUser');
                }, 2000);
                
        },
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

}


