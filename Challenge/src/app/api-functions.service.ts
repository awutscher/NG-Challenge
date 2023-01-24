import { HttpClient } from '@angular/common/http';
import { PropertyRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
/* import {Md5} from 'ts-md5'; */

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService {
  http: any;

  country = "spain";
  apikey = "b7644d4f4c9497a9178e6862a834ecc2"

  constructor(private _http: HttpClient) { }

  rootURL = 'http://ws.audioscrobbler.com/2.0';

  getTopArtists(){
    let artists = this._http.get(this.rootURL + "/?method=geo.gettopartists&country=" + this.country + "&limit=10" +"&api_key="+this.apikey+"&format=json")
    return artists;
    }
  }
