import { Component, OnInit } from '@angular/core';
import {User} from '../../Shared/Models/user';
import {UserService} from '../../Shared/Services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
user: User;
  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  id: number;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.service.getUserById(this.id).subscribe(u => { this.user = u; } );
  }

  update() {
    this.router.navigateByUrl('/updateuser/' + this.id);
  }

  delete() {
    this.service.delete(this.id).subscribe(p => { this.router.navigateByUrl('users'); } );
  }

}
