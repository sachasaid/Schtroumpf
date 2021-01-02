import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  public getFriends() {
    return this.http.get("http://localhost:8080/users");
  }

    public postFriends(formData: any) {
    return this.http.post("http://localhost:8080/users", formData);
  }

  public delFriends(id: any) {
    return this.http.delete("http://localhost:8080/users" + '/' + id);
  }
  
}
