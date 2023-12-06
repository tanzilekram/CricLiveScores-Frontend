import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient: HttpClient) { }


  getAllMatches(){
      return this.httpClient.get(`${environment.apiUrl}/match/all`)
  }

  getliveMatches(){
      return this.httpClient.get(`http://Localhost:8088/match/live`)
  }
 
  getPointTable(){
      return this.httpClient.get(`http://Localhost:8088/match/points-table`)
  }

}
