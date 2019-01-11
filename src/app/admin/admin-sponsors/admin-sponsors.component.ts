import { Component, OnInit, Input } from '@angular/core';
import { Sponsor } from '../../classes/sponsorClass';
import { AddSponsorService } from '../../services/add-sponsor.service';

@Component({
  selector: 'app-admin-sponsors',
  templateUrl: './admin-sponsors.component.html',
  styleUrls: ['./admin-sponsors.component.css']
})
export class AdminSponsorsComponent implements OnInit {


  sponsorVisible:boolean = true;
  selectedSponsor:boolean = false;
  chosenSponsor:Sponsor;

  public sponsors:Sponsor[];
  private sponsorService:AddSponsorService;

  constructor(sponsorService:AddSponsorService){
    this.sponsorService = sponsorService;
  }
  

  ngOnInit() {
    // Infos Sponsors
    this.sponsorService.getSponsor().subscribe(
      (param)=>{ 
        this.sponsors = param;
      }
    )
  }

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
