import { Component, OnInit } from '@angular/core';
import { Sponsor } from '../classes/sponsorClass';
import { AddSponsorService } from '../services/add-sponsor.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  public sponsors:Sponsor[];
  private sponsorService:AddSponsorService;

  public sponsor_list:Sponsor[];

  constructor(sponsorService:AddSponsorService){
    this.sponsorService = sponsorService;
  }
  

  ngOnInit() {
    // Infos Sponsors
    this.sponsorService.getSponsor().subscribe(
      (param)=>{ 
        this.sponsors = param;
        this.sponsor_list = this.listWhithoutMainSponsors(this.sponsors); 
      }
    )
  }

  listWhithoutMainSponsors(array:Sponsor[]) {
    let resultArray: Sponsor[] = [];
    if (array.length > 3) {
      for (let i=3; i < array.length; i++){
        resultArray.push(array[i]);
      }
    }
    return resultArray;
  }

  ngOnDestroy(){
    window.scrollTo(0,0);
  }
}
