import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private articleImg:string = "";
  private articleTitle:string = "Titre de l'article";
  private articleDate:string = "12/12/2018";

  constructor() { }

  ngOnInit() {
  }

}
