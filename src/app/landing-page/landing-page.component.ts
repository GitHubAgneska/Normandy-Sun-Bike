import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

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


  public articles:Article[];
  private service:ArticleService;

  constructor(service:ArticleService) {
    // Service
    this.service = service;

    this.sponsor_list = this.allSponsors ;
  }

  //BLOG
  public articleImg1:string = "";
  public articleTitle1:string = "Title1";
  public articleDate1:string = "00/00/0000";

  public articleImg2:string = "";
  public articleTitle2:string = "Title2";
  public articleDate2:string = "00/00/0000";

  public crslImgs = document.getElementsByClassName("landing-headline");

  public rightPosition;
  public middlePosition;
  public leftPosition;

  ngOnInit() {

    this.service.getArticle().subscribe(
      (param)=>{ 
        this.articles = param; 
      }
    )
    console.log(this.articles)

    if(screen.width > 960){
      for(let i=0; i<this.crslImgs.length; i++){
        this.crslImgs[i]['style'].marginLeft = this.crslImgPosition(i) + "%";
        console.log()
      }
    }
  }


  crslToLeft(){
    let leftArrow = document.getElementById("crsl-left-arrow");
    let rightArrow = document.getElementById("crsl-right-arrow");
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


  ngOnDestroy(){
    window.scrollTo(0,0);
  }
}
