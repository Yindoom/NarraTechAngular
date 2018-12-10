import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Log} from '../Models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  apiUrl = 'https://localhost:5001/api/log/';

  constructor(private http: HttpClient) { }

  getAllLogs(): Observable<Log[]> {
    const log = this.http.get<Log[]>(this.apiUrl);
    return log;
  }

  getByUser(user: string): Observable<Log> {
    return this.http.get<Log>(this.apiUrl + user);
  }

  getBySuccess(success: boolean): Observable<Log> {
    return this.http.get<Log>(this.apiUrl + success);
  }
}
