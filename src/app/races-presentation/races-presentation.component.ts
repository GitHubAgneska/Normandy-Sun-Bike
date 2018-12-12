import { Component, OnInit } from '@angular/core';
import {TweenMax, Power4} from 'gsap/TweenMax';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-races-presentation',
  templateUrl: './races-presentation.component.html',
  styleUrls: ['./races-presentation.component.css']
})
export class RacesPresentationComponent implements OnInit {

  public raceTitle: string;
  private raceText: string;
  private raceLink: string;
  private raceImg: string;
  private raceColor: string;
  private blogBackTitle: string;

  private raceText2019:string = "Et 2019 quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates harum similis alias, summatim causas perstringam nusquam a veritate sponte propria digressurus. Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.";
  private linkRace2019: string = "https://www.thesuntrip.com/sun-trip-tour-2019/";
  private img2019: string = "../../assets/2019-landing.jpg";

  private raceText2020:string = "Et 2020 quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates harum similis alias, summatim causas perstringam nusquam a veritate sponte propria digressurus. Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.";
  private linkRace2020: string = "https://www.thesuntrip.com/2020-edition/";
  private img2020: string = "../../assets/2020-landing.jpg";
  
  private raceBackgroundImg:string = "https://www.thesuntrip.com/2020-edition/";
  private scrollButton:string = "Blog";


  constructor(route: ActivatedRoute) {
    
    this.raceTitle = route.snapshot.data.title;

    if (this.raceTitle == "The Sun Trip 2019") {
      this.raceText = this.raceText2019 ; 
      this.raceLink = this.linkRace2019;   
      this.raceImg = this.img2019
      this.raceColor = "#478952";
      this.blogBackTitle = `RHONES<br/>- ALPES<br/>2019 - `;
      // this.background.style.backgroundColor = "#D3BB58"
    }
    else if (this.raceTitle == "The Sun Trip 2020" ){
      this.raceText = this.raceText2020;
      this.raceLink = this.linkRace2020;   
      this.raceImg = this.img2020;
      this.raceColor = "#D3BB58"; 
      this.blogBackTitle = `LYON -<br/>- CANTON<br/>- - 2020`;
      // this.background.style.backgroundColor = "#D3BB58"
    }
   }


  


  ngOnInit() {

    let background = document.getElementById("race-description");
    let blogBackground = document.getElementById("race-background");

    background.style.background = this.raceColor;
    blogBackground.style.color = this.raceColor;

  }

// SCROLL

  
    
    // Click
    scrollClickButton(element) {

      const page = document.getElementById("race-description-container")
      
      if (element == "race") {
        page.style.marginTop = "0";
      } else if (element =="blog") {
        page.style.marginTop = "-88vh";
      }
      
    };
    
    ngOnDestroy(){
      window.scrollTo(0,0);
    }
  }
