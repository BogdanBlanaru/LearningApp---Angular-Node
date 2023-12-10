import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/user.model';

const BASEURL = 'http://localhost:8800';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(newUser: User) {
    console.log(newUser);
    return this.http.post(`${BASEURL}/api/auth/register`, newUser);
  }
}
