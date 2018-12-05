import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sponsors-landing',
  templateUrl: './sponsors-landing.component.html',
  styleUrls: ['./sponsors-landing.component.css']
})
export class SponsorsLandingComponent implements OnInit {

  @Input('sponsorName') sponsorsName:string;
  @Input('sponsorImg') sponsorsImg:string;

  constructor() {
  }


  ngOnInit() {
    console.log(this.sponsorsImg)
  }

}
