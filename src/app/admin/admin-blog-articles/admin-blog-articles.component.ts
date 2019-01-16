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
blogArticleVisible:boolean = false;
selectedBlogArticle:boolean = false;
chosenBlogArticle:BlogArticle;

  constructor() { }

  ngOnInit() {}

    // create new blog-article field - (directive *ngIf)
    public displayNewblogArticleFields(){
      this.blogArticleVisible = true;
      this.selectedBlogArticle =false;
    }


    // edit selected blog-article fields - (directive *ngIf)   
  public onSelect(blogArticle:BlogArticle):void{
    this.selectedBlogArticle = true;
    this.blogArticleVisible = false;
   /*  console.log(`selectedBlogArticle = ${JSON.stringify(this.selectedBlogArticle)}`); */
    this.chosenBlogArticle = blogArticle;
    }

}

