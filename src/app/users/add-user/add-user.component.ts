import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../Shared/Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  // reactive form to create a new user
  // TODO probably implement a password so the new user can login, but who am I to judge
  addUserForm = new FormGroup({
    username: new FormControl(''),
    isAdmin: new FormControl('')
  });

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  // Sends user to backend.
  // The checkbox is all funky
  // default value is null, so we set it to false just in case
  // navigates to details page of new user
save() {
    const user = this.addUserForm.value;
    if (user.isAdmin !== true) {
      user.isAdmin = false;
    }
    this.service.addUser(user).subscribe(u => {
      this.router.navigateByUrl('userdetail/' + u.id); } );
  }
}
