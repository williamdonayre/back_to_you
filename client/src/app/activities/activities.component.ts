import { NewEntryComponent } from './../new-entry/new-entry.component';
import { ActivitiesService } from './../services/activities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
 
  activity: any;
  activities: Array <any>;

  constructor(
    private activitiesServ:ActivitiesService,
    private parentComponent: NewEntryComponent
  ) { }

  ngOnInit(){
    this.activitiesServ.getList()
    .subscribe((activities)=>{
      this.activities = activities;
        });
  }

  selectActivity(selectedActivity){
    this.activity = selectedActivity;
    let filteredActivity = this.activities.find((activity)=>{
      return activity.name === selectedActivity
      })
    console.log(filteredActivity._id);
    this.parentComponent.entry.activity = filteredActivity._id;
  }

}
