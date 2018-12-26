import { Component, OnInit } from '@angular/core';
import { BlogArticle } from './BlogArticleElement_class';
import { BLOGARTICLES } from './mock-blogArticleElement';


@Component({
  selector: 'app-admin-blog-articles',
  templateUrl: './admin-blog-articles.component.html',
  styleUrls: ['./admin-blog-articles.component.css']
})
export class AdminBlogArticlesComponent implements OnInit {

blogArticles = BLOGARTICLES;

  /* blogArticles = [
    
    { title : 'Article 1', img : "/assets/mountain.jpg", date : "11/06/21019" },
    { title : 'Article 2', img : "/assets/mountain.jpg", date : "12/06/21019" },
    { title : 'Article 3', img : "/assets/mountain.jpg", date : "13/06/21019" },
    { title : 'Article 4', img : "/assets/mountain.jpg", date : "14/06/21019" }

  ]; */

  
  constructor() { }

  ngOnInit() {
  }

}
