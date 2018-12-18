import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../Shared/Services/login.service';
import {RequestService} from '../../Shared/Services/request.service';

@Component({
  selector: 'app-show-requests',
  templateUrl: './show-requests.component.html',
  styleUrls: ['./show-requests.component.css']
})
export class ShowRequestsComponent implements OnInit {

  constructor(private token: LoginService, private requestService: RequestService) { }
  requests: Request[];

  // gets all requests from the backend, based on the user that is currently logged in.
  ngOnInit() {
    const user = this.token.getUsername();

    this.requestService.getRequestsByUser(user).subscribe(o => { this.requests = o; } );
  }

}
