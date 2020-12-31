import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  myForm: FormGroup;
  successMessage =  '';

  constructor(private authService: AuthserviceService) {
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

  register() {
    console.log(this.myForm.value);
    this.authService.submitRegister(this.myForm.value)
    .subscribe(
      data => this.successMessage = "Register Success",
      error => this.successMessage = "Some Error"
    )
  }
}


