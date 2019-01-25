import { Component, OnInit, OnDestroy } from '@angular/core';
import {TweenMax, Power2} from 'gsap/TweenMax';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {

  constructor() { }

  public UpDown: boolean

  ngOnInit() {
    document.getElementById('projet-to-top-button-container').style.display = 'none';
  }

  pageProjetTopTop() {
    const topPage = document.getElementById('projet-container');
    const target = topPage.offsetTop;
    const from = window.scrollY;
    const tmp = { y: from };

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


  ngOnDestroy() {
    window.scrollTo(0, 0);
  }
}
