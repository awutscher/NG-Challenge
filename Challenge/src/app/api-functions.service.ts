import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* import {Md5} from 'ts-md5'; */

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService {
  http: any;

  apikey = "b7644d4f4c9497a9178e6862a834ecc2"

  constructor(private hhtp: HttpClient) { }


  rootURL = 'http://ws.audioscrobbler.com/2.0';


  getTopArtists(){
    return this.http.post(this.rootURL + "/?method=chart.gettopartists&api_key="+this.apikey+"&format=json")
  }
  
  getdata(){
    return this.http.get('http://ws.audioscrobbler.com/2.0');
  }
}
