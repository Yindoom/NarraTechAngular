import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Shared/Services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  // reactive form to update a user
  // is the same as add user
  // TODO LOOK AT ADD USER
  updateUserForm = new FormGroup({
    username: new FormControl(''),
    isAdmin: new FormControl('')
  });
  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  // id is a number
  id: number;

  // gets user from backend, to patch in values for proper updating
  ngOnInit() {
  this.id = +this.route.snapshot.paramMap.get('id');

  this.service.getUserById(this.id).subscribe(p => { this.updateUserForm.patchValue({
    username: p.username,
    isAdmin: p.isAdmin
  }); } );
  }

  // updates user in backend.
  // checkbox fuckery required workaround for default value of null
  save() {
    const user = this.updateUserForm.value;
    if (user.isAdmin !== true) {
      user.isAdmin = false;
    }
    this.service.updateUser(this.id, user).subscribe(u => {
      this.router.navigateByUrl('userdetail/' + u.id); } );
  }
}
