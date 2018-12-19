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
export class SampleService {

  constructor(private http: HttpClient, private auth: LoginService) { }
  apiUrl = 'https://localhost:5001/api/samples/';

  // gets samples, using the id of a request. the backend finds request, sends it through the mockdata generator and badabing badaboom
  getSamples(id: number): Observable<Sample[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
    return this.http.get<Sample[]>(this.apiUrl + id, httpOptions);
  }
}
