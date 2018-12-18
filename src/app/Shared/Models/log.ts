import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user';

export class Log {
  id?: number;
  request: Request;
  success: boolean;
  message: string;
  time: DateTimeFormat;
}
