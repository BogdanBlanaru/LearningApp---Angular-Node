import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User, { RegisteredUser } from '../models/user.model';

const BASEURL = 'http://localhost:8800';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(newUser: User) {
    return this.http.post(`${BASEURL}/api/auth/register`, newUser);
  }

  login(user: RegisteredUser) {
    return this.http.post(`${BASEURL}/api/auth/login`, user);
  }

  logout() {
    localStorage.removeItem('LearningAppUserData');
  }
}
