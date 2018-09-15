import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  user: any = false;
  error: string;
  privateData: any = '';

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
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
