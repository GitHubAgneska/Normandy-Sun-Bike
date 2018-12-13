import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  public articleList;

  public allArticles = [
    { 
      "id" : 1,
      "title" : "Actualité 1",
      "img":""
    },
    { 
      "id" : 2,
      "title" : "Actualité 2",
      "img":""
    },
    { 
      "id" : 3,
      "title" : "Actualité 1",
      "img":""
    },
    { 
      "id" : 4,
      "title" : "Actualité 2",
      "img":""
    },
    { 
      "id" : 5,
      "title" : "Actualité 1",
      "img":""
    },
    { 
      "id" : 6,
      "title" : "Actualité 2",
      "img":""
    }
  ]

  private raceTitle: string;

  constructor(route: ActivatedRoute) { 
    this.raceTitle = route.snapshot.data.title;

    this.articleList = this.allArticles ;
  }

  ngOnInit() {

    const pageBlog = document.getElementById("blog-background");
    if (this.raceTitle == "Blog") {
      pageBlog.style.paddingTop = "18vh";
    }
  }

}
