import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class EmotionsService  {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/emotions`)
      .pipe(map((res) => res.json()));
  }
}