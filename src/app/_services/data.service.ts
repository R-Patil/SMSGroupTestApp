import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class DataService {

   constructor(private http: HttpClient) {

   }

   getData(fromDate, toDate) {
      return this.http.get(`${environment.apiBaseURL}/cities/`);
      //return this.http.get(`${environment.apiBaseURL}/cities/${fromDate}/${toDate}`);
   }
}