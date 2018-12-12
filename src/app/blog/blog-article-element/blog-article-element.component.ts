import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article-element',
  templateUrl: './blog-article-element.component.html',
  styleUrls: ['./blog-article-element.component.css']
})
export class BlogArticleElementComponent implements OnInit {

  public raceTitle: string;
  public articleBackground: string;

  private articleImg:string = "";
  private articleTitle:string = "Article title";
  private articleDate:string = "00/00/0000";

  constructor(route: ActivatedRoute) { 
    this.raceTitle = route.snapshot.data.title;
    if (this.raceTitle == "The Sun Trip 2019"){
      this.articleBackground = "#478952";
    } else if (this.raceTitle == "The Sun Trip 2020" ) {
      this.articleBackground = "#D3BB58";
    } else {
      this.articleBackground = "#2D73A9";
    }
  }

  ngOnInit() {
    const background = document.getElementsByClassName("blog-element-infos");

    console.log(this.articleBackground)

    for (let i = 0; i < background.length; i++) {
      background[i]["style"].background = this.articleBackground;
    }
    
  }

}
