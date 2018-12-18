import { Directive, ElementRef, OnDestroy } from '@angular/core';
import {TweenMax, Power2} from 'gsap/TweenMax';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnDestroy {

  private elem : ElementRef;

  constructor(p_elem: ElementRef) { 
    this.elem = p_elem;
    this.scroll = this.scroll.bind(this);
    window.addEventListener("scroll",this.scroll, false);
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scroll);
  }

  public UpDown:boolean;
  public count = 0;
    
  public lastScrollTop = 0;
   scroll(){
    // UP OR DOWN
    var st = window.pageYOffset;
    if (st > this.lastScrollTop){ 
      //Down 
      this.UpDown = false;
    } else {
      this.UpDown = true;
      //up
    }
    this.lastScrollTop = st <= 0 ? 0 : st;

    // Scroll length controller
    this.count++
    if (this.count > 20) {

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

      this.count = 0;
    }

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
