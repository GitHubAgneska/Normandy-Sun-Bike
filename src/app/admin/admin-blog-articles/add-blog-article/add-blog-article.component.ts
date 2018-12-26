import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog-article',
  templateUrl: './add-blog-article.component.html',
  styleUrls: ['./add-blog-article.component.css']
})
export class AddBlogArticleComponent implements OnInit {



  newBlogArticleVisible:boolean = false;


  constructor() { }

  ngOnInit() {
  }

    // create new blogArticle field - directive *ngIf
    public displayNewBlogArticleFields(){
      this.newBlogArticleVisible = true;
    }
}
