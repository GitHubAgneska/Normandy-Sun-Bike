import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public sponsor_list:any[];

  public allSponsors = [
    { "name" : "wild code school",
      "img":"../../assets/logo_WCS.png"
    },
    { "name" : "wild code school2",
      "img":"../../assets/logo_WCS.png"
    },
  ]

  constructor(){
    this.sponsor_list = this.allSponsors ;
  }

  public articleImg1:string = "";
  public articleTitle1:string = "Title1";
  public articleDate1:string = "00/00/0000";

  public articleImg2:string = "";
  public articleTitle2:string = "Title2";
  public articleDate2:string = "00/00/0000";

  ngOnInit() {
  }

}
