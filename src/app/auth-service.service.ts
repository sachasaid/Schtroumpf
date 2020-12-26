import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(data: any):Observable<any> {
    console.log("I am server")
    return this.http.post("mongodb://localhost:27017/Schtroumpf/users/login", data);
  }
}
