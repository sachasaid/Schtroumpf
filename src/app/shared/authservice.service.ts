import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
