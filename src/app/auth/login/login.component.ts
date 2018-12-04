import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RouterConfigLoader} from '@angular/router/src/router_config_loader';
import {Router} from '@angular/router';
import {LoginService} from '../../Shared/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth: LoginService,
              private router: Router) { }
    loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  errormessage = '';

  ngOnInit() {
    this.auth.logout();
  }
  login() {
   const input = this.loginGroup.value;
   this.auth.login(input).subscribe(success => {this.router.navigateByUrl('/users'); },
    error => {
      this.errormessage = error.message; }
      );
  }
}
