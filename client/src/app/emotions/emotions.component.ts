import { NewEntryComponent } from './../new-entry/new-entry.component';
import { EmotionsService } from './../services/emotions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})


export class EmotionsComponent implements OnInit {

  emotion: any;
  emotions: Array<any>;

  constructor(
    private emotionsServ: EmotionsService,
    private parentComponent: NewEntryComponent
    ) { }

  ngOnInit() {
     this.emotionsServ.getList()
    .subscribe((emotions)=>{
      this.emotions = emotions;
    });
  }
  
  selectEmotion(selectedEmotion){
    this.emotion = selectedEmotion;
    let filteredEmotion = this.emotions.find((emotion)=>{
      return emotion.name === selectedEmotion
      })
    console.log(filteredEmotion._id);
    this.parentComponent.entry.emotion = filteredEmotion._id;
  }

}

