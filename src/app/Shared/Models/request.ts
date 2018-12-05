import {TimeInterval} from 'rxjs';

export class Request {
  tagName: string;
  from: Date;
  to: Date;
  interval: TimeInterval<number>;
  sampleType: string;
}
