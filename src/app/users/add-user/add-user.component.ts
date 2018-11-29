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
  addUserForm = new FormGroup({
    username: new FormControl(''),
    isAdmin: new FormControl('')
  });

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }
save() {
    const user = this.addUserForm.value;
    if (user.isAdmin !== true) {
      user.isAdmin = false;
    }
    this.service.addUser(user).subscribe(u => {
      this.router.navigateByUrl('userdetail/' + u.id); } );
  }
}
