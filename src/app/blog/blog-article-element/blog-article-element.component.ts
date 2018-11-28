import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-article-element',
  templateUrl: './blog-article-element.component.html',
  styleUrls: ['./blog-article-element.component.css']
})
export class BlogArticleElementComponent implements OnInit {

  private articleImg:string = "";
  private articleTitle:string = "Article title";
  private articleDate:string = "00/00/0000";

  constructor() { }

  ngOnInit() {
  }

}
