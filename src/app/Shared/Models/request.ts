import {TimeInterval} from 'rxjs';
import {User} from './user';
import {Log} from './log';

export class Request {
  id?: number;
  tagName: string;
  from: Date;
  to: Date;
  interval: TimeInterval<number>;
  sampleType: string;
  user: User;
  logs: Log[];
}
