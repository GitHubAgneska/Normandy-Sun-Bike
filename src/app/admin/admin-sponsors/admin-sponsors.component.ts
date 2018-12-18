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
  editSponsorVisible:boolean = false;
  deleteSponsor:boolean = false;

  
  constructor() { }

  ngOnInit() {

    }

  // create new sponsor field - directive *ngIf
  public displayNewSponsorFields(){
    this.sponsorVisible = true;
  }

  public displayEditSponsorField() {
    this.sponsorVisible = true;
  }

/*   public selectSponsorToDelete() {
    alert ("Confirmer la suppression de l'élément");
    if (alert) {
      for (let i = 0; i < SPONSORS.length ; i++){
        if (SPONSORS[i] ==  )
      }
    }
  } */


}
