import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user';

export class Log {
  id?: number;
  user: User;
  success: boolean;
  action: string;
  time: DateTimeFormat;
}
