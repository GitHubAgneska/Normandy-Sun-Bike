import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article-element',
  templateUrl: './blog-article-element.component.html',
  styleUrls: ['./blog-article-element.component.css']
})
export class BlogArticleElementComponent implements OnInit {

  @Input('articleTitle') articleTitle:string;
  @Input('articleImg') articleImg:string;
  @Input('articleId') articleId:number;
  @Input('articleCategorie') articleCategorie:string;
  @Input('i') index:number;

  public raceTitle: string;
  public articleBackground: string;

  private articleDate:string = "00/00/0000";

  constructor(route: ActivatedRoute) { 
    this.raceTitle = route.snapshot.data.title;
  }

  ngOnInit() {

    if (this.articleCategorie == "Sun Trip Tour 2019"){
      this.articleBackground = "#478952";
    } else if (this.articleCategorie == "Sun Trip 2020") {
      this.articleBackground = "#D3BB58";
    } else {
      this.articleBackground = "#2D73A9";
    }

    console.log(this.articleCategorie)

    const background = document.getElementsByClassName("blog-element-infos");

      background[this.index]["style"].background = this.articleBackground;

    const position = document.getElementsByClassName("blog-element-container");

      if (this.articleId % 2 == 0) {
        position[this.articleId-1].classList.add("blog-element-paire");
      } else {
        position[this.articleId-1].classList.add("blog-element-impaire");
      }
    
    
  }

}
