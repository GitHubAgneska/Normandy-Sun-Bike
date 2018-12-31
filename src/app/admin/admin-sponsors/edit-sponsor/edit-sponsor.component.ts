import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from '../sponsorClass';
import { SPONSORS } from '../mock-sponsors';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-sponsor',
  templateUrl: './edit-sponsor.component.html',
  styleUrls: ['./edit-sponsor.component.css']
})

export class EditSponsorComponent implements OnInit {

  @Input() sponsor:Sponsor;
  sponsors = SPONSORS;
  selectedLevel:number = 0;

  fileToUpload:File = null;
  url = '';
  submitted = false;
  registerForm : FormGroup;

  uploadData: any;
  selectedFile: File;

  selectedSponsor:Sponsor = {
    name:"no_sponsor_defined",
    img:"",
    level:0
  };


/*   @ViewChild('fileUploadEdit')
  private fileUpload1:  AngularFileUploaderModule; */

  // angular file-upload comp conf 
    afuConfig = {
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

      sponsorImg:['{{selectedSponsor.img}}'],
      sponsorName:['', Validators.required],
      sponsorLink:[''],
      sponsorDescription: [ '', Validators.required],
      sponsorLevel:[''],
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
      

  // FINAL VALIDATE BUTTON

  onSubmit() {
    this.submitted = true;
  };


}

