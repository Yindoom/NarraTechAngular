import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../_guards/auth.guard';
import {LoginService} from '../../Shared/Services/login.service';
import {RequestService} from '../../Shared/Services/request.service';
import {BooltostringService} from '../../Shared/Services/booltostring.service';

@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css']
})
export class ShowRequestsComponent implements OnInit {

  constructor(private token: LoginService, private requestService: RequestService, private stringer: BooltostringService) { }
  requests: Request[];

  ngOnInit() {
    const user = this.token.getUsername();

    this.requestService.getRequestsByUser(user).subscribe(o => { this.requests = o; } );
  }

}
