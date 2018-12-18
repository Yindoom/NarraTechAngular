import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sample} from '../Models/sample';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiUrl = 'https://localhost:5001/api/request/';
  constructor(private http: HttpClient, private token: LoginService) { }

  sendRequest(req: Request): Observable<Request> {
    const user = this.token.getUsername();
    return this.http.post<Request>(this.apiUrl + '?username=' + user, req);
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

