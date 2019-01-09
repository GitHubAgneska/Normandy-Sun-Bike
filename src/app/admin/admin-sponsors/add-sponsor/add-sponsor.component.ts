
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from '../sponsorClass';
import { SPONSORS } from '../mock-sponsors';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3600/api/upload';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})

export class AddSponsorComponent implements OnInit {

  public fileToUpload: File = null;
  public url = '';
  public submitted = false;
  public registerForm: FormGroup;

  public selectedLevel:number = 0;

  sponsors = SPONSORS;
  sponsorVisible:boolean = true;

  public uploadData: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  

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
  }  // add formbuilder service


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


    // EXTRACT DATA FROM FORM
    this.registerForm.valueChanges.subscribe(console.log )  
    
  }




  // 
/*   handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  } */




// DISPLAY IMAGE TO UPLOAD

/* onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.;
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}  */


  //display img before upload

/*   uploadData: any;
  selectedFile: File; */
  
/* onFileChanged(event) {
  this.selectedFile = <File>event.target.files[0];
  if (event.target.files && event.target.files[0])
  {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
  }
} */



// FINAL VALIDATE BUTTON

/* onSubmit() {
  this.submitted = true;
} */


