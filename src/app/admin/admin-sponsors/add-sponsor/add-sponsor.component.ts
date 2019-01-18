
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from '../../../classes/sponsorClass';
import { SPONSORS } from '../mock-sponsors';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { AddSponsorService } from 'src/app/services/add-sponsor.service';

const URL = 'http://localhost:3600/api/upload';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})

export class AddSponsorComponent implements OnInit {

  public img;

  public newSponsorToSend = new Sponsor;

  public newSponsorName:string;
  public newSponsorLink:string;
  public newSponsorDescription:string;
  public newSponsorImgName:string;

  // +
  public inputStatus:boolean = true;
  public ImgNameForInput:string;

  // Modal
  public modal:boolean = false;
  public modalElementName:string = "Le sponsort";
  public modalActionOnElement:string = "ajouté";
  public modalMessage:string;
  public modalRaceName:string; 

  public fileToUpload: File = null;
  // public url = '';
  public submitted = false;
  public registerForm: FormGroup;

  public selectedLevel:number = 0;

  // sponsors = SPONSORS;
  sponsorVisible:boolean = true;

  public uploadData: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  public sponsors:Sponsor; 
  public sponsorService:AddSponsorService;

  constructor(private formBuilder: FormBuilder, sponsorService:AddSponsorService) { 
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
    this.sponsorService = sponsorService;

    this.selectedLevel = 1;
    this.registerForm = this.formBuilder.group(options);
  }  // add formbuilder service


  ngOnInit() {

    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //      console.log('ImageUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');

    //     //  this.addSponsorWithImg()
    // }
        

  }

  onMouseOver():void{
    if (this.inputStatus == true) { 
    document.getElementById("plusSignId").style.opacity = "1";
    document.getElementById("plusSignId").style.textShadow = "rgba(255, 255, 255, 0.6)";
    }
  }

  onMouseLeave():void{
    if (this.inputStatus == true) { 
    document.getElementById("plusSignId").style.opacity = "0.2";
    }
  }

  ngOnChange(){
  }

  updateFile(file: HTMLInputElement) {
    let name = file.value;
  }

  detectInputStatus() {
    let squareInput = document.getElementById("square-input-file");
    let uploadedImg = document.getElementById("img-input");
    let newImg = uploadedImg['files'][0];
    this.ImgNameForInput = "L'image '" + newImg.name + "' a été ajouté.";

    squareInput.style.background = "#194B3E";
    this.inputStatus = false;
  }

  public modalMsg() {
    this.modalMessage = this.newSponsorName + " est maintenant visible sur le site."
    this.modal = true;
  }

  validateButton() {
    let uploadedImg = document.getElementById("img-input");
    let newImg = uploadedImg['files'][0];
    this.newSponsorImgName = newImg.name;

    this.newSponsorToSend.id = 1;
    this.newSponsorToSend.img = "./assets/" + this.newSponsorImgName;
    this.newSponsorToSend.name = this.newSponsorName;
    this.newSponsorToSend.link = this.newSponsorLink;
    this.newSponsorToSend.level = this.selectedLevel;
    if (this.newSponsorToSend.level == 1){
      this.newSponsorToSend.description = this.newSponsorDescription
    }

    this.sponsorService.addImgInAssets(newImg).subscribe();
    this.sponsorService.addSponsor(this.newSponsorToSend).subscribe();

    this.modalMsg();

  }
  
}

