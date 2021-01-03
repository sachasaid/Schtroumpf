import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { UserComponent } from './Component/user/user.component';
import { RegisterComponent } from './Component/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './Component/login-user/login-user.component';
import { UserService } from './shared/user.service';
import { AddBoxComponent } from './box/add-box/add-box.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';




import { AddrowService } from './addrow.service';
import { AuthserviceService } from './shared/authservice.service';
import { InformationComponent } from './Component/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    RegisterComponent,
    LoginUserComponent,
    AddBoxComponent,
    InformationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatCardModule    
  ],
  providers: [
    {provide: MatDialogRef,
      useValue: {}},
    UserService, AddrowService, AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
