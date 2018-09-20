import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [SessionService]
})
export class WelcomeComponent implements OnInit {

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
      logout() {
        this.session.logout()
          .subscribe(
            // () => this.successCb(null),
            // (err) => this.errorCb(err)
            res => this.router.navigate([''])
          );  
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }
}