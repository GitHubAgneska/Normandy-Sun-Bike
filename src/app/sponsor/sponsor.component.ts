import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  public Sponsor1Name ="name 1st sponsor"
  public Sponsor1Text ="Quid enim tam absurdum quam delectari multis inanimis rebus, animante virtute praedito, eo qui vel amare vel, ut ita dicam, redamare possit, non admodum delectari? Nihil est enim remuneratione benevolentiae, nihil vicissitudine studiorum officiorumque iucundius."
  public Sponsor1Img ="name 1st sponsor"

  public Sponsor2Name ="name 2nd sponsor"
  public Sponsor2Img ="name 1st sponsor"

  public Sponsor3Name ="name 3d sponsor"
  public Sponsor3Img ="name 1st sponsor"


  public sponsor_list:any[];

  public allSponsors = [
    { "name" : "wild code school",
      "img":"../../assets/logo_WCS.png"
    },
    { "name" : "wild code school2",
      "img":"../../assets/logo_WCS.png"
    },
    { "name" : "wild code school",
      "img":"../../assets/logo_WCS.png"
    },
  ]

  constructor(){
    this.sponsor_list = this.allSponsors ;
  }


  ngOnInit() {
  }

  ngOnDestroy(){
    window.scrollTo(0,0);
  }
}
