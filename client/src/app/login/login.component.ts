import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
  providers: [SessionService]

})
export class LoginComponent implements OnInit {

  formInfo:any = {
    username: '',
    password: '',
    name: ''
  };

  user: any = false;
  error: string;
  privateData: any = '';

  constructor(private session: SessionService,
    private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  login() {
    this.session.login(this.formInfo)
      .subscribe(
        
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
  }

  signup() {
    console.log('IT WORKED');
    this.session.signup(this.formInfo)
    .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
  }

  logout() {
    this.session.logout()
      .subscribe(
        () => this.successCb(null),
        (err) => this.errorCb(err)
        );
  }

  getPrivateData() {
    this.session.getPrivateData()
      .subscribe(
        (data) => this.privateData = data,
        (err) => this.error = err
      );
  }

  errorCb(err): any {
    this.error = err;
    this.user = null;
  }
  
  successCb(user): any {
    this.user = user;
    this.error = null;
  }


}