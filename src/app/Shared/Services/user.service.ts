import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

apiUrl = 'https://localhost:5001/api/users/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + id);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(this.apiUrl + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put<User>(this.apiUrl + id, user);
  }
}
