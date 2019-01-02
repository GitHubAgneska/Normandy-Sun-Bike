import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogArticle } from "../BlogArticleElement_class";
import { BLOGARTICLES } from "../mock-blogArticleElement";

@Component({
  selector: 'app-edit-blog-articles',
  templateUrl: './edit-blog-articles.component.html',
  styleUrls: ['./edit-blog-articles.component.css']
})

export class EditBlogArticlesComponent implements OnInit {

  @Input() blogArticle:BlogArticle;
  blogArticles = BLOGARTICLES;

  selectedBlogArticle:BlogArticle = {
    title : "no_blogArticleTitle_defined",
    text : "",
    img : ""
  };

  constructor() { }

  ngOnInit() {
  }

}
