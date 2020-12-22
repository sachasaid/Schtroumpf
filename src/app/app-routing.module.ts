import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { UserComponent } from './Component/user/user.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
