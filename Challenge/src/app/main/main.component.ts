import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from '../api-functions.service';
import { ItopArtists } from '../interfaces/ItopArtists';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  /* artists: any ; */
  artists:ItopArtists[] = [];

  constructor(public apiData:ApiFunctionsService) {
   }

  ngOnInit(): void{
    this.apiData.getTopArtists().subscribe((res:any) =>{
      this.artists=res;
      console.log(this.artists)
    })
    }
/* 
    getthis(){
      this.apiData.getTopArtists().subscribe((res: any) =>{
        this.artists=res})
        console.log("hi")
      } */

    test(){
      let testdata = this.apiData.getTopArtists()
      console.log(typeof(testdata))
    }

    arraytest(){
      let testdata = this.apiData.getTopArtists()
      console.log(typeof(testdata))
    }

}
