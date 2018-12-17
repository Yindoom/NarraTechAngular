import { Component, OnInit } from '@angular/core';
import {LogService} from '../../Shared/Services/log.service';
import {Log} from '../../Shared/Models/log';
import {BooltostringService} from '../../Shared/Services/booltostring.service';

export interface LogTable {
  user: string;
  id: number;
  success: boolean;
  action: string;
}

@Component({
  selector: 'app-list-logs',
  templateUrl: './list-logs.component.html',
  styleUrls: ['./list-logs.component.css']
})

export class ListLogsComponent implements OnInit {

  // columns for the Mat-table in the view
  displayedColumns: string[] = ['id', 'requestId' , 'user', 'action', 'success'];


  constructor(private service: LogService, private stringer: BooltostringService) { }
  // array of logs, to get from the backend
logs: Log[];

  // gets all logs from the backend on init
  ngOnInit() {
    this.service.getAllLogs().subscribe( list => { this.logs = list; } );
  }
}
