import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from '../../../classes/sponsorClass';
import { SPONSORS } from '../mock-sponsors';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ViewChild } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3600/api/upload';

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

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  /*   @ViewChild('fileUploadEdit')
    private fileUpload1:  AngularFileUploaderModule; */


  constructor(private formBuilder: FormBuilder) { 
    const options:any = {                             // create data model for the form

      sponsorImg: [''],
      sponsorName: ['', Validators.required],
      sponsorLink: [''],
      sponsorDescription: ['', Validators.required],
      sponsorLevel: [''],
      agree: [false, [
        Validators.requiredTrue
      ]]
    };

    this.selectedLevel = 1;
    this.registerForm = this.formBuilder.group(options);
  }   // add formbuilder service


  ngOnChanges( changes:SimpleChanges){
    if( changes.sponsor != undefined ){
      this.selectedLevel = this.sponsor.level;
    }
  }

  onSubmit() {
    this.sponsor.level = this.selectedLevel;
  };

  onMouseOver():void{
    document.getElementById("plusSignId").style.opacity = "1";
  }

  onMouseLeave():void{
    document.getElementById("plusSignId").style.opacity = "0.2";
  }

  ngOnInit() {
    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');


}

  }
}
