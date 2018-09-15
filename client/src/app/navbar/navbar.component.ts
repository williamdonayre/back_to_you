import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
