import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: Http) { }

getEntries() {
  return this.http.get(`${environment.BASE_URL}/api/entries`)
    .pipe(map((res) => res.json()));
}

get(entry) {
  return this.http.get(`${environment.BASE_URL}/api/entries/${entry._id}`, entry)
  .pipe(map((res) => res.json()));
}

post(form){
  return this.http.post(`${environment.BASE_URL}/api/entries`, form);
}

editEntry(entry) {
  return this.http.put(`${environment.BASE_URL}/api/entries/${entry._id}/edit`, entry)
    .pipe(map((res) => res.json()));
}

removeEntry(entryId) {
  return this.http.delete(`${environment.BASE_URL}/api/entries/${entryId}`)
    .pipe(map((res) => res.json()));
}
}