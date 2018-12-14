import { Injectable } from '@angular/core';
import {Sample} from '../Models/sample';
import {Log} from '../Models/log';

@Injectable({
  providedIn: 'root'
})
export class BooltostringService {

  constructor() { }

  getStringSample(sample: Sample): string {
    if (sample.quality === 0) {
      return 'Good';
    } else if (sample.quality === 1) {
      return 'Suspect';
    } else { return 'Bad'; }
  }

  getStringLog(log: Log): string {
    if (log.success) {
      return 'Success';
    }
    return 'Failure';
  }

}
