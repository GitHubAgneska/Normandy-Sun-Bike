
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})

export class AddSponsorComponent implements OnInit {

  fileToUpload:File = null;

  url = '';

  submitted = false;

  registerForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { }  // add formbuilder service

  ngOnInit() {
    this.registerForm = this.formBuilder.group( {  // create data model for this form


      sponsorImg:[''],
      sponsorName:[ '', Validators.required],
      sponsorDescription: [ '', Validators.required],
      sponsorLevel:[''],
      agree: [false, [
        Validators.requiredTrue
      ]]

    });

    /* get sponsorName() {
      return this.sponsorName.get('sponsorName');
    } */


    // EXTRACT DATA FROM FORM
    this.registerForm.valueChanges.subscribe(console.log )  
  }

  

  // 
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }



// ANGULAR FILE UPLOADER MODULE CONFIG

  afuConfig = {
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};


// DISPLAY IMAGE TO UPLOAD
/* 
onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
    }
  }
} */



// VALIDATE BUTTON

onSubmit() {
  this.submitted = true;
}

}
