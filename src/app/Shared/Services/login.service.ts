import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginInput} from '../Models/loginInput';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'https://localhost:5001';

  constructor(private http: HttpClient) { }

  login(input: LoginInput): Observable<boolean> {
   return this.http.post<any>(this.apiUrl + '/token', input)
     .pipe(map(response => {
       const token = response && response.token;
       if (token) {
         localStorage.setItem('currentUser', JSON.stringify(
           {username: input.username, token: token}));
         return true;
       } else {
         return false;
       }
     }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
