import { Component, OnInit, Input } from '@angular/core';
import { BlogArticle } from "../BlogArticleElement_class";
import { BLOGARTICLES } from "../mock-blogArticleElement";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-blog-article',
  templateUrl: './add-blog-article.component.html',
  styleUrls: ['./add-blog-article.component.css']
})

export class AddBlogArticleComponent implements OnInit {


  @Input() blogArticle:BlogArticle;
  blogArticles = BLOGARTICLES;


  fileToUpload:File = null;
  url = '';
  submitted = false;
  registerForm : FormGroup;


  constructor(private formBuilder: FormBuilder) { }  // add formbuilder service

  ngOnInit() {
    this.registerForm = this.formBuilder.group( {  // create data model for this form

      blogArticleTitle:[ '', Validators.required],
      blogArticleImg:[''],
      blogArticleText: [ '', Validators.required],
      agree: [false, [
        Validators.requiredTrue
      ]]

    });

      // EXTRACT DATA FROM FORM
    this.registerForm.valueChanges.subscribe(console.log )  
    }

    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
    }

    uploadData: any;
    selectedFile: File;




    // angular file-upload comp conf 
    afuConfig3 = {
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


    // FINAL VALIDATE BUTTON

  onSubmit() {
     this.submitted = true;
  } 


}
