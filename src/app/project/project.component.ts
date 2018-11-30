import { Component, OnInit } from '@angular/core';
import {TweenMax, Power2} from 'gsap/TweenMax';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  public UpDown:boolean

  ngOnInit() {

    let count = 0;
    
    let lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
      // UP OR DOWN
      var st = window.pageYOffset;
      if (st > lastScrollTop){ 
        //Down 
        this.UpDown = false;
      } else {
        this.UpDown = true;
        //up
      }
      lastScrollTop = st <= 0 ? 0 : st;

      // Scroll length controller
      count++
      if (count > 20) {

        let pagePosition = window.scrollY;
        // ELEMENT TO SCROLL TO
        let qui = document.getElementById("projet-qui-container");
        let quoi = document.getElementById("projet-quoi-container");
        let comment = document.getElementById("projet-comment-container");
        let next = document.getElementById("projet-next-container");
        
        this.scrollPosition(qui, null);
        this.scrollPosition(quoi, qui);
        this.scrollPosition(comment, quoi);
        this.scrollPosition(next, comment);

        count = 0;
      }

    }, false);
  }

  scrollPosition(element, upToElement){

    let pagePosition = window.scrollY;
    let elementPosition = element.offsetTop;

    if (this.UpDown == true && pagePosition >= (elementPosition - 300) && pagePosition <= elementPosition){
      this.scrolling(upToElement);
    }
    if (this.UpDown == false && pagePosition >= (elementPosition - 600) && pagePosition <= (elementPosition - 300)){
      this.scrolling(element);
    }

  }

  scrolling(element){

    let target = element.offsetTop;
    let from = window.scrollY;
    let tmp = { y: from };
    
      TweenMax.to(
        tmp,
        1,
        { y: target,
          ease: Power2.easeOut,
          onUpdate: function() {
          window.scrollTo(from, tmp.y);
          }
        }
      );
    }

}
