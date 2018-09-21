import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../services/user.service';
import { SessionService } from "../services/session.service";
import { environment } from './../../environments/environment';

// import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  user = <any>{};
  error: string;
  baseUrl = environment.BASE_URL;
 
  public updatedUser: Object = {};
  public userName: String;
  public userUsername: String;
  public userLocation: String;

  saveError = "";

  constructor(
  private session: SessionService,
  private router: Router,
  private userService: UserService
) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  successCb(user) {
    this.user = user;
    this.updatedUser = Object.create(user);
    this.error = null;
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }


  editUser() {
   this.userService.editUser(this.updatedUser)
   .subscribe((message) => {
     console.log(message);
    this.ngOnInit()
    this.hideModal()
     })
  }

  showModal(){
    document.getElementById("myModal").style.display = "block"
  }

  hideModal(){
    document.getElementById("myModal").style.display = "none"
  }


  deleteUser() {
    if (window.confirm('Are you sure?')) {
      this.userService.removeUser(this.user._id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
      }

}
}
  