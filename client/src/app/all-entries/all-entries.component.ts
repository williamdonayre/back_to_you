import { Component, OnInit } from '@angular/core';

import { EntryService } from './../services/entry.service';
import { environment } from './../../environments/environment.prod';
@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements OnInit {
 
  entries = <any>{};
  error: string;
  baseUrl = environment.BASE_URL;
 
  constructor(
    
  ) { }

  ngOnInit() {
  }

}
