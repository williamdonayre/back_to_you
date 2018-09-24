import { Component, OnInit } from '@angular/core';

import { EntryService } from './../services/entry.service';
import { environment } from './../../environments/environment.prod';
@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements OnInit {
 
    baseUrl = environment.BASE_URL;
 
  constructor(
    private entries: EntryService    
  ) { }

  ngOnInit() {
    console.log(this.entries);
    this.entries.getEntries()
    .subscribe((entries) => {
      this.entries = entries;
    });
  }

}
