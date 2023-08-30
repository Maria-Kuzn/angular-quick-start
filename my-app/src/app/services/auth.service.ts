import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(email: string) {
    localStorage.setItem('token', email)
  }

  public logout() {
    localStorage.clear();
  }

  public isAuthenticated() {
    return Boolean(localStorage.getItem('token'));
  }

  public getUserInfo() {
    return localStorage.getItem('token');
  }
}
