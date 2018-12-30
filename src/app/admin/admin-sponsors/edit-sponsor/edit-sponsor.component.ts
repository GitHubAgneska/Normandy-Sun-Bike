import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from '../sponsorClass';
import { SPONSORS } from '../mock-sponsors';

@Component({
  selector: 'app-edit-sponsor',
  templateUrl: './edit-sponsor.component.html',
  styleUrls: ['./edit-sponsor.component.css']
})

export class EditSponsorComponent implements OnInit {

  fileToUpload:File = null;

  url = '';

  submitted = false;

  registerForm : FormGroup;

  selectedLevel:number = 0;

  sponsors = SPONSORS;

  uploadData: any;
  selectedFile: File;

  selectedSponsor:Sponsor = {
    name:"no_sponsor_defined",
    img:"",
    level:0
  };

  public onSelect(sponsor:Sponsor):void{
    this.selectedSponsor = sponsor;
    console.log(`selectedSponsor = ${JSON.stringify(this.selectedSponsor)}`);
  }



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

