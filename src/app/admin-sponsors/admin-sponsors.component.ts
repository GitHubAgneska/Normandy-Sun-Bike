import { Component, OnInit } from '@angular/core';
import { Sponsor } from './sponsorClass';
import { SPONSORS } from './mock-sponsors';

@Component({
  selector: 'app-admin-sponsors',
  templateUrl: './admin-sponsors.component.html',
  styleUrls: ['./admin-sponsors.component.css']
})
export class AdminSponsorsComponent implements OnInit {


  sponsors = SPONSORS;
  sponsorVisible:boolean = false;

  
  constructor() { }

  ngOnInit() {

    }

  // create new sponsor field - directive *ngIf
  public displayNewSponsorFields(){
    this.sponsorVisible = true;
  }



}
