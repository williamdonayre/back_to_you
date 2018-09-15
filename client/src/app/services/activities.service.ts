import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService  {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/activities`)
      .pipe(map((res) => res.json()));
  }
}