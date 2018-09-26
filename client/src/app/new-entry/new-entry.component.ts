import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EntryService } from './../services/entry.service';
import { environment } from './../../environments/environment';
import { SessionService } from './../services/session.service.spec';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
user = Object;

public userId: Object ={};
 
entry = { 
  dateCreated: '',
  emotion: '',
  activity: '',
  comment: ''
}
    saveError: String;
  
  constructor(
    private session: SessionService,
    private router: Router,
    private entryService: EntryService,
    
  ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  successCb(user) {
    this.user = user,
    this.userId = user._id    
  }

   
  // isFormClean(): boolean {
  //   if (this.entry.emotion !== '') {
  //     return window.confirm(`
  //         Unsaved changes.
  //         Are you sure you want to leave?
  //     `);
  //   }

  //   return true;
  // }
 
  saveNewEntry(entry){
    console.log(entry);
    this.entryService.createNewEntry(entry)
    .subscribe((message)=>{
      console.log(message);
      this.ngOnInit()
      this.router.navigate(['/entries']);
    })
  } 

}
  // successCb(entry) {
  //   this.entry = entry;
  //   this.emotion = this.entry.emotion;
  //   this.activity = this.entry.activity;
  //   this.error = null;
  // }

  // errorCb(err) {
  //   this.error = err;
  //   this.entry = null;
  // }



