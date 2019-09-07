import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // Object Save
  saveUser(user: any) {
    return this.http.post(`${environment.baseUrl}saveUser`, user);
  }

  // Get User Detail
  getUser(userId: any) {
    return this.http.get(`${environment.baseUrl}getUser/${userId}`);
  }

}
