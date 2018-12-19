import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sample} from '../Models/sample';
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
export class RequestService {

  apiUrl = 'https://localhost:5001/api/request/';
  constructor(private http: HttpClient, private token: LoginService) { }

  sendRequest(req: Request): Observable<Request> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.token.getToken());
    const user = this.token.getUsername();
    return this.http.post<Request>(this.apiUrl + '?username=' + user, req, httpOptions);
  }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl);
  }

  getRequestByid(id: number): Observable<Request> {
    return this.http.get<Request>(this.apiUrl + id);
  }

  getRequestsByUser(user: string): Observable<Request[]> {
    return this.http.get<Request[]>(this.apiUrl + '?user=' + user);
  }
}

