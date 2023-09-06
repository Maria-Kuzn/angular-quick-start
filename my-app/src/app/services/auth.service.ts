import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take, tap } from 'rxjs';
import { User, UserInfo } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly usersUrl = "http://localhost:3000/users";

  constructor(private readonly httpClient: HttpClient) { }

  public login(user: User) {
    const loggedUser = this.httpClient.get<UserInfo[]>(this.usersUrl + `?email=${user.email}&&password=${user.password}`);
    loggedUser.subscribe((info) => {
      if (info.length) {
        localStorage.setItem('token', info[0].fakeToken);
        return info[0];
      } else {
        console.log('Нет такого пользователя');
        return null;
      }
    })
  }

  public logout() {
    localStorage.clear();
  }

  public isAuthenticated() {
    return Boolean(localStorage.getItem('token'));
  }

  public getUserInfo(token: string) {
    return this.httpClient.get<UserInfo[]>(this.usersUrl + `?fakeToken=${token}`);
  }
}
