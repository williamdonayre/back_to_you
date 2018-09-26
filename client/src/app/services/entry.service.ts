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
  return this.http.get(`${environment.BASE_URL}/api/entries`).pipe(map((res) => res.json()));
}

get(entry) {
  return this.http.get(`${environment.BASE_URL}/api/entries/${entry._id}`, entry).pipe(map((res) => res.json()));
}

createNewEntry(entry){
  return this.http.post(`${environment.BASE_URL}/api/entries/new-entry`, entry, {withCredentials:true}).pipe(map((res) => res.json()));
}

editEntry(entry) {
  return this.http.put(`${environment.BASE_URL}/api/entries/${entry._id}/edit`, entry, {withCredentials:true}).pipe(map((res) => res.json()));
}

removeEntry(entryId) {
  return this.http.delete(`${environment.BASE_URL}/api/entries/${entryId}/delete`).pipe(map((res) => res.json()));
}
}