import { ActivitiesService } from './../services/activities.service';
import { EmotionsService } from './../services/emotions.service';
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

  entry = <any>{};
  error: string;  
  baseUrl = environment.BASE_URL;


  public newEntry: Object ={};
  public userName: String;
  
  saveError = "";
  
  constructor(
    private session: SessionService,
    private router: Router,
    private entryService: EntryService,
    private EmotionsService: EmotionsService,
    private ActivitiesService: ActivitiesService
  ) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }
  
  successCb(entry) {
    this.entry = entry;
    this.newEntry = Object.create(entry);
    this.error = null;
  }

  errorCb(err) {
    this.error = err;
    this.entry = null;
  }

  post(){
    this.entryService.post(this.newEntry)
    .subscribe(()=>{
      this.router.navigate(['/entries']);
    })
  }

}
