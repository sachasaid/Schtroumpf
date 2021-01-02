import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body: any) {
    return this._http.post("http://localhost:8080/register", body, {
      observe: 'body'
    });
  }

   login(body: any) {
    return this._http.post("http://localhost:8080/login", body, {
      observe: 'body'
    });
  }

  getLogin() {
    return this._http.get("http://localhost:8080/user", {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token')!)
    });
  }
}
