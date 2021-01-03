import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationUserService {

  constructor(private _http: HttpClient) { }

    public postFriends(formData: any) {
    return this._http.post("http://localhost:8080/users", formData);
  }

  
}
