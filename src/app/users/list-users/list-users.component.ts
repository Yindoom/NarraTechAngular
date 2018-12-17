import { Component, OnInit } from '@angular/core';
import {User} from '../../Shared/Models/user';
import {UserService} from '../../Shared/Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private service: UserService) { }

users: User[];

  ngOnInit() {
    this.service.getAllUsers().subscribe(list => { this.users = list; } );
  }

}
