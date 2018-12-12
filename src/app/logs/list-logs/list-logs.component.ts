import { Component, OnInit } from '@angular/core';
import {LogService} from '../../Shared/Services/log.service';
import {Log} from '../../Shared/Models/log';

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
  displayedColumns: string[] = ['id', 'requestId' , 'user', 'action', 'success'];


  constructor(private service: LogService) { }
logs: Log[];
  ngOnInit() {
    this.service.getAllLogs().subscribe( list => { this.logs = list; } );
  }
getSuccessorFailure(l: Log): string {
    if (l.success) {
      return 'Success';
    }
    return 'Failure';
}
}
