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

  fileToUpload:File = null;
  url = '';
  submitted = false;
  registerForm : FormGroup;

  selectedBlogArticle:BlogArticle = {
    title : "no_blogArticleTitle_defined",
    text : "",
    img : ""
  };

  // angular file-upload comp conf 
  afuConfig4 = {
    multiple: false,
    formatsAllowed: ".jpg,.jpeg,.png",
    maxSize: "1",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      headers: {
        "Content-Type" : "text/plain;charset=UTF-8",
    /* "Authorization" : `Bearer ${token}` */
      }
    },
    /* theme: "dragNDrop", */
    hideProgressBar: true,
    hideResetBtn: false,
    hideSelectBtn: false
  };

  constructor(private formBuilder: FormBuilder) { }   // add formbuilder service

  ngOnInit() {
    this.registerForm = this.formBuilder.group( {  // create data model for this form

      blogArticleTitle:[ '', Validators.required],
      blogArticleImg:[''],
      blogArticleText: [ '', Validators.required],
      agree: [false, [
        Validators.requiredTrue
      ]]

    });
  }
}
