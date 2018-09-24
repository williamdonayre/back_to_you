import { EmotionsService } from './../services/emotions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {

  constructor(
    private emotions: EmotionsService,
    ) { }

  ngOnInit() {
    console.log(this.emotions);
    this.emotions.getList()
    .subscribe((emotions)=>{
      this.emotions = emotions;
    });
  }
}

