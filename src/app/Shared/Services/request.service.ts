import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sample} from '../Models/sample';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiUrl = 'https://localhost:5001/api/samples/';
  constructor(private http: HttpClient) { }

  sendRequest(req: Request): Observable<Sample[]> {
    const samples = this.http.post<Sample[]>(this.apiUrl, req);
    return samples;
  }
}

