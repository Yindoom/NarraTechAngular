import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth: LoginService,
              private router: Router) { }

    // reactive form to log in. Owen Wilson WOw
    loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  errormessage = '';

  // when you enter the log in page, the current token is deleted. This is not optimal
  ngOnInit() {
    this.auth.logout();
  }

  // get input from form, use it to log in. Simple stuff, really
  // navigates to homepage afterwards.
  login() {
   const input = this.loginGroup.value;
   this.auth.login(input).subscribe(success => { this.router.navigateByUrl(''); },
    error => {
      this.errormessage = error.message; }
      );
  }
}
