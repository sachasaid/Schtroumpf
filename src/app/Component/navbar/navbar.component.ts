import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['../loginUser']);
  }
  movetoFriends(){
    this._router.navigate(['../friends'])
  }
    movetoprofil(){
    this._router.navigate(['../info'])
  } 
}
