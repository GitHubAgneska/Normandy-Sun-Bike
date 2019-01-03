import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from '../sponsorClass';
import { SPONSORS } from '../mock-sponsors';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-sponsor',
  templateUrl: './edit-sponsor.component.html',
  styleUrls: ['./edit-sponsor.component.css']
})

export class EditSponsorComponent implements OnInit, OnChanges {

  @Input() public sponsor: Sponsor;
  public selectedLevel: number = 1;
  public fileToUpload: File = null;
  public url = '';
  public submitted = false;
  public registerForm: FormGroup;

  public uploadData: any;
  public selectedFile: File;

  /*   @ViewChild('fileUploadEdit')
    private fileUpload1:  AngularFileUploaderModule; */

  // angular file-upload comp conf 
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.jpeg,.png",
    maxSize: "1",
    uploadAPI: {
      url: "https://example-file-upload-api",
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        /* "Authorization" : `Bearer ${token}` */
      }
    },
    /* theme: "dragNDrop", */
    hideProgressBar: true,
    hideResetBtn: false,
    hideSelectBtn: false
  };


  constructor(private formBuilder: FormBuilder) { }   // add formbuilder service


  ngOnChanges( changes:SimpleChanges){
    if( changes.sponsor != undefined ){
      this.selectedLevel = this.sponsor.level;
    }
  }

  onSubmit() {
    this.sponsor.level = this.selectedLevel;
  };

  ngOnInit() {

    const options:any = {  // create data model for this form

      sponsorImg: ['{{selectedSponsor.img}}'],
      sponsorName: ['', Validators.required],
      sponsorLink: [''],
      sponsorDescription: ['', Validators.required],
      sponsorLevel: [''],
      agree: [false, [
        Validators.requiredTrue
      ]]

    };

    this.selectedLevel = this.sponsor.level;
    this.registerForm = this.formBuilder.group(options);

  }
}




// NOTES D'AGNES

    /*    // EXTRACT DATA FROM FORM
     this.registerForm.valueChanges.subscribe();
     }
 
     handleFileInput(files: FileList) {
       this.fileToUpload = files.item(0);
     }
       
 
   // FINAL VALIDATE BUTTON
 
    */

