import { ActivitiesService } from './../services/activities.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(
    private activities:ActivitiesService,
  ) { }

  ngOnInit() {console.log(this.activities);
    this.activities.getList()
    .subscribe((activities)=>{
      this.activities = activities;
    });
  }

}
