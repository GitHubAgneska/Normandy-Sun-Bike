import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../classes/article';
import { AddSponsorService } from '../services/add-sponsor.service';
import { ActualityService } from '../services/actuality.service';
import { Sponsor } from '../classes/sponsorClass';
import { Actuality } from '../classes/actuality';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public sponsor_list:any[];


  public intro = `Des envies de voyages différents, un corps qui n’est pas celui d’un
  sportif de haut niveau, la découverte en 2014 de The Sun Trip, une « épopée » avec une idée
  simple et percutante : un point de départ, un point d’arrivée et un parcours libre pour une
  aventure en vélos électriques solaires ouverte à tous. En mêlant aventure, liberté de
  circulation, sportivité, rencontre humaine et les technologies des énergies renouvelables,
  The Sun Trip ambitionne de faire parler autrement de l’écologie, d’une manière
  profondément humaniste et pragmatique. Chaque participant devient un porte drapeau de
  cette ambition en la laissant vivre au gré de son réseau, de sa route et de ses rencontres.
  Cette aventure, j’ai envie de la tenter et de vous la faire partager…..
  `

  //BLOG
  public articleImg1:string = "";
  public articleTitle1:string = "Title1";
  public articleDate1:string = "00/00/0000";

  public articleImg2:string = "";
  public articleTitle2:string = "Title2";
  public articleDate2:string = "00/00/0000";


  public actuality:Actuality[];
  private actualityService:ActualityService;
  public sponsors:Sponsor[];  
  private sponsorService:AddSponsorService;
  public articles:Article[];
  private articleService:ArticleService;

  constructor(actualityService:ActualityService, sponsorService:AddSponsorService, articleService:ArticleService) {
    // Service
    this.actualityService = actualityService;
    this.sponsorService = sponsorService;
    this.articleService = articleService;
  }

  public crslImgs = document.getElementsByClassName("landing-headline");

  public rightPosition;
  public middlePosition;
  public leftPosition;

  ngOnInit() {

    if(screen.width > 960){
      for(let i=0; i<this.crslImgs.length; i++){
        this.crslImgs[i]['style'].marginLeft = this.crslImgPosition(i) + "%";
        console.log()
      }
    }

    // Infos Articles
    this.articleService.getArticle().subscribe(
      (param)=>{ 
        this.articles = param; 
      }
    )
    
    // Infos Actuality
    this.actualityService.getActuality().subscribe(
      (param)=>{ 
        this.actuality = param;
        if (this.actuality[0].position == 1) {
          this.crslToLeft();
          console.log("oui")
        } else if (this.actuality[0].position == 3) {
          this.crslToRight();
        }
      }
    )
    // Infos Sponsors
    this.sponsorService.getSponsor().subscribe(
      (param)=>{ 
        this.sponsors = param; 
      }
    )

    setTimeout(()=>{
      for(let i = 0; i < this.crslImgs.length; i++){
        this.crslImgs[i]['style'].transition = "1.5s";
      }
    },100)
      
    
    
  }


  crslToLeft(){
    const arrow1 = document.getElementById("carousel-nav-circle1")
    const arrow2 = document.getElementById("carousel-nav-circle2")
    const arrow3 = document.getElementById("carousel-nav-circle3")
    const arrow4 = document.getElementById("carousel-nav-circle4")

    let position;

    if(this.crslImgs[0]['offsetLeft'] < 0 && this.crslImgs[1]['offsetLeft'] > 0){
      position = 64;
      // leftArrow.style.opacity = "0";
      arrow1.style.opacity = "0.8";
      arrow2.style.opacity = "0";
      arrow3.style.opacity = "0";

      this.crslImgs[0]['style'].opacity = "1";
      this.crslImgs[1]['style'].opacity = "0.5";
      this.crslImgs[2]['style'].opacity = "0.5";
    } else if (this.crslImgs[0]['offsetLeft'] < 0 && this.crslImgs[1]['offsetLeft'] < 0) {
      position = 0;
      // rightArrow.style.opacity = "1";
      arrow2.style.opacity = "0.8";
      arrow3.style.opacity = "0.8";
      arrow4.style.opacity = "0";

      this.crslImgs[0]['style'].opacity = "0.5";
      this.crslImgs[1]['style'].opacity = "1";
      this.crslImgs[2]['style'].opacity = "0.5";
    }

    for(let i=0; i<this.crslImgs.length; i++){
      this.crslImgs[i]['style'].marginLeft = this.crslImgPosition(i) + position + "%";
    }
  }

  crslToRight(){
    let leftArrow = document.getElementById("crsl-left-arrow");
    let rightArrow = document.getElementById("crsl-right-arrow");
    const arrow1 = document.getElementById("carousel-nav-circle1")
    const arrow2 = document.getElementById("carousel-nav-circle2")
    const arrow3 = document.getElementById("carousel-nav-circle3")
    const arrow4 = document.getElementById("carousel-nav-circle4")

    let position;

    if(this.crslImgs[0]['offsetLeft'] < 0 && this.crslImgs[1]['offsetLeft'] > 0){
      position = -64;
      // rightArrow.style.opacity = "0";
      arrow2.style.opacity = "0";
      arrow3.style.opacity = "0";
      arrow4.style.opacity = "0.8";

      this.crslImgs[0]['style'].opacity = "0.5";
      this.crslImgs[1]['style'].opacity = "0.5";
      this.crslImgs[2]['style'].opacity = "1";
    } else if (this.crslImgs[0]['offsetLeft'] > 0 && this.crslImgs[1]['offsetLeft'] > 0) {
      position = 0;
      // leftArrow.style.opacity = "1";
      arrow1.style.opacity = "0";
      arrow2.style.opacity = "0.8";
      arrow3.style.opacity = "0.8";

      this.crslImgs[0]['style'].opacity = "0.5";
      this.crslImgs[1]['style'].opacity = "1";
      this.crslImgs[2]['style'].opacity = "0.5";
      
    }

    for(let i=0; i<this.crslImgs.length; i++){
      this.crslImgs[i]['style'].marginLeft = this.crslImgPosition(i) + position + "%";
    }
  }

  crslImgPosition(i){
    return (i*74) - 60;
  }


  // Sponsor Container Scroll Buttons
  public scrollRight:any;

  sponsorStopScroll(){
    clearTimeout(this.scrollRight);
    };
  // Scrolling
  sponsorScrolling(param:number, display, direction:string) {

    let sponsorContainer = document.getElementById("landing-sponsors-container");

    if (direction == "left") {
      sponsorContainer.scrollLeft -=20;
    } else if (direction == "right") {
      sponsorContainer.scrollLeft +=20;
    }

    if( param > 0 ){
      this.sponsorStopScroll();
      
      this.scrollRight = setTimeout( 
          () => {
              this.sponsorScrolling(param - 1, display, direction);
          },20);
    }
  }
  // Start
  SponsorStartScrolling(direction) {
    var display = document.querySelector('.time');
    this.sponsorScrolling(1000, display, direction);
  };


  ngOnDestroy(){
    window.scrollTo(0,0);
  }
}
