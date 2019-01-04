import { Component, OnInit, Input } from '@angular/core';
import { Sponsor } from '../../classes/sponsorClass';
import { SPONSORS } from './mock-sponsors';

@Component({
  selector: 'app-admin-sponsors',
  templateUrl: './admin-sponsors.component.html',
  styleUrls: ['./admin-sponsors.component.css']
})
export class AdminSponsorsComponent implements OnInit {


  sponsors = SPONSORS;
  sponsorVisible:boolean = false;
  selectedSponsor:boolean = false;
  chosenSponsor:Sponsor;

  constructor() { }

  ngOnInit() {}

  // create new sponsor field - (directive *ngIf)
  public displayNewSponsorFields(){
    this.sponsorVisible = true;
    this.selectedSponsor = false;
  }

  // edit selected sponsor fields - (directive *ngIf)   
  public onSelect(sponsor:Sponsor):void{
    this.selectedSponsor = true;
    this.sponsorVisible = false;
    /* console.log(`selectedSponsor = ${JSON.stringify(this.selectedSponsor)}`); */
    this.chosenSponsor = sponsor;
  }
  
}
