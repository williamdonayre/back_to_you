import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";


import { SessionService } from "./services/session.service";
import { EmotionsService } from "./services/emotions.service";
import { ActivitiesService } from "./services/activities.service";
import { UserService } from "./services/user.service";
import { EntryService } from "./services/entry.service";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NewEntryComponent,
    AllEntriesComponent,
    ActivitiesComponent,
    EmotionsComponent,
    UserProfileComponent,
    SingleEntryComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
  ],
  providers: [ 
    SessionService,
    // UserService,
    // EntryService,
    // EmotionsService,
    // ActivitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }