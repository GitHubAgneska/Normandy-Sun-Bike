import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  private raceTitle: string;

  public articles:Article[];
  private service:ArticleService;

  constructor(route: ActivatedRoute, service:ArticleService) { 
    // Data Routing
    this.raceTitle = route.snapshot.data.title;
    // Service
    this.service = service;
  }

  ngOnInit() {

    this.service.getArticle().subscribe(
      (param)=>{ 
        this.articles = param; 
      }
    )

    const pageBlog = document.getElementById("blog-background");
    if (this.raceTitle == "Blog") {
      pageBlog.style.paddingTop = "18vh";
    }
  }

}
