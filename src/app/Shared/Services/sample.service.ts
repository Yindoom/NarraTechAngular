import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sample} from '../Models/sample';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }
  apiUrl = 'https://localhost:5001/api/sample/';

  getSamples(id: number): Observable<Sample[]> {
    return this.http.get<Sample[]>(this.apiUrl + id);
  }
}
