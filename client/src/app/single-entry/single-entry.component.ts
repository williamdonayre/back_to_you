import { EntryService } from './../services/entry.service';
import { SessionService } from "../services/session.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
   
   entry = <any>{};
   error: string;
   baseUrl = environment.BASE_URL;
   
   public updatedEntry: Object = {};
   public entryDate: String;
   public emotion: Object = {};
   public activity: Array <any>; 

  constructor(
    private session: SessionService,
    private router: Router,
    private entryService: EntryService
  ) { }    

  ngOnInit() {   

  }
  
  successCb(entry) {
    this.entry = entry;
    this.updatedEntry = Object.create(entry);
    this.error = null;
  }

  errorCb(err) {
    this.error = err;
    this.entry = null;
  }


  editEntry() {
    this.entryService.editEntry(this.updatedEntry)
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
 

  deleteEntry() {
    if (window.confirm('Are you sure?')) {
      this.entryService.removeEntry(this.entry._id)
        .subscribe(() => {
          this.router.navigate(['/entries']);
        });
      }

}


}
