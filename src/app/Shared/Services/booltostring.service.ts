import { Injectable } from '@angular/core';
import {Sample} from '../Models/sample';
import {Log} from '../Models/log';

@Injectable({
  providedIn: 'root'
})
export class BooltostringService {

  constructor() { }

  // returns a string based on the quality of the sample.
  // in the backend this is an enum, translated to numbers.
  getStringSample(sample: Sample): string {
    if (sample.quality === 0) {
      return 'Good';
    } else if (sample.quality === 1) {
      return 'Suspect';
    } else { return 'Bad'; }
  }

  // the log is supposed to have two values, Success, if the request is valid, and failure if not
  // currently no failed request logs are saved
  getStringLog(log: Log): string {
    if (log.success) {
      return 'Success';
    }
    return 'Failure';
  }

}
