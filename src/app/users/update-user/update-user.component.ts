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
  updateUserForm = new FormGroup({
    username: new FormControl(''),
    isAdmin: new FormControl('')
  });
  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  id: number;

  ngOnInit() {
  this.id = +this.route.snapshot.paramMap.get('id');

  this.service.getUserById(this.id).subscribe(p => { this.updateUserForm.patchValue({
    username: p.username,
    isAdmin: p.isAdmin
  }); } );
  }

  save() {
    const user = this.updateUserForm.value;
    if (user.isAdmin !== true) {
      user.isAdmin = false;
    }
    this.service.updateUser(this.id, user).subscribe(u => {
      this.router.navigateByUrl('userdetail/' + u.id); } );
  }
}
