import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoatsService {

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any>{
    return this.http.get('http://localhost:4200/assets/boatlist.json');
    //return this.http.get('https://seboatbuilderdemo.azurewebsites.net/api/list');
  }
}
