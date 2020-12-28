import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  public getFriends() {
    return this.http.get("http://localhost:8080/api/friends");
  }

    public postFriends(formData: any) {
    return this.http.post("http://localhost:8080/api/friends", formData);
  }

  public delFriends(id: Object) {
    return this.http.delete("http://localhost:8080/api/friends/:id" + '/' + id);
  }
  
}
