import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/user';
import {LoginService} from './login.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {


apiUrl = 'https://localhost:5001/api/users/';

  constructor(private http: HttpClient, private auth: LoginService) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + id);
  }

  delete(id: number): Observable<User> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
    return this.http.delete<User>(this.apiUrl + id, httpOptions);
  }

  updateUser(id: number, user: User) {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
    return this.http.put<User>(this.apiUrl + id, user, httpOptions);
  }
}
