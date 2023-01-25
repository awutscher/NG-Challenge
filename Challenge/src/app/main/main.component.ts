import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from '../api-functions.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  artists: any ;
  topartists:any;

  constructor(public apiData:ApiFunctionsService) {
   }

  ngOnInit(): void{
    this.apiData.getTopArtists().subscribe((res:any) =>{
      this.artists=res;
      console.log(this.artists)
    })
    }
}
