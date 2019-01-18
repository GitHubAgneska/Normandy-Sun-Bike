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

  }

  pageProjetTopTop() {
    let topPage = document.getElementById('projet-container');
    let target = topPage.offsetTop;
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


    ngOnDestroy(){
      window.scrollTo(0,0);
    }
}
