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



  constructor(private formBuilder: FormBuilder) { }   // add formbuilder service

  ngOnInit() {
    this.registerForm = this.formBuilder.group( {  // create data model for this form


      sponsorImg:['{{this.sponsor.img}}'],
      sponsorName:[ '{{this.sponsor.name}}', Validators.required],
      sponsorLink:[''],
      sponsorDescription: [ '', Validators.required],
      sponsorLevel:[''],
      agree: [false, [
        Validators.requiredTrue
      ]]

    });



    get sponsorName() {                              // getters & setters 
      return this.sponsorName.get('sponsorName');
    }  


  }



  // FINAL VALIDATE BUTTON

onSubmit() {
  this.submitted = true;
}

}

