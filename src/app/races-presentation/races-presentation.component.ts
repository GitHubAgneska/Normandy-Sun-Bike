import { Component, OnInit } from '@angular/core';
import {TweenMax, Power4} from 'gsap/TweenMax';

@Component({
  selector: 'app-races-presentation',
  templateUrl: './races-presentation.component.html',
  styleUrls: ['./races-presentation.component.css']
})
export class RacesPresentationComponent implements OnInit {

  constructor() { }


  private raceTitle:string = "Race Title";
  private raceText:string = "Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates harum similis alias, summatim causas perstringam nusquam a veritate sponte propria digressurus. Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.";
  private raceBackgroundImg:string = "";

  private scrollButton:string = "Blog";


  ngOnInit() {

    let title = document.getElementById("race-title");

    var lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
      var st = window.pageYOffset;
      if (st > lastScrollTop){
        setTimeout(()=>{
          this.scrollButton = "Course"
        },200);      
      } else {
        setTimeout(()=>{
          this.scrollButton = "Blog"
        },200);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    }, false);

  }


  scrolling(element,condition:string){
    let navbar = document.getElementById("race-description").offsetTop;
    let target;
    let from = window.scrollY;
    let tmp = { y: from };

    if (this.scrollButton == condition) {
      target = element.offsetTop - navbar;

      TweenMax.to(
        tmp,
        1.5,
        { y: target,
          ease: Power4.easeOut,
          onUpdate: function() {
          window.scrollTo(from, tmp.y);
          }
        }
      );
    }
    
  }

  scrollToBlog(){
    let raceDescription = document.getElementById("race-description");
    let blog = document.getElementById("race-button-container");
    
    this.scrolling(blog,"Blog");
    this.scrolling(raceDescription,"Course");
  }

    // Click
    scrollClickButton() {
      this.scrollToBlog();
    };

    ngOnDestroy(){
      window.scrollTo(0,0);
    }
  }
