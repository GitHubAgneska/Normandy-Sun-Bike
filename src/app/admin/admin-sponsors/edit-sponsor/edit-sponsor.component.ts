import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor } from '../../../classes/sponsorClass';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { AddSponsorService } from 'src/app/services/add-sponsor.service';

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

    public img;
  
    public newSponsorName:string;
    public newSponsorLink:string;
    public newSponsorDescription:string;
    public newSponsorImgName:string;


    // Modifier img
    public inputStatus:boolean = true;
    public ImgNameForInput:string;

     // Modal
    public modal:boolean = false;
    public modalElementName:string = "Le sponsort";
    public modalActionOnElement:string;
    public modalMessage:string;
    public modalRaceName:string; 

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
  }   // add formbuilder service


  ngOnChanges( changes:SimpleChanges){
    if( changes.sponsor != undefined ){
      this.selectedLevel = this.sponsor.level;
    }
  }

  ngOnInit() {
  
  }


  detectInputStatus() {
    let squareInput = document.getElementById("square-input-file");
    let uploadedImg = document.getElementById("img-input");
    let newImg = uploadedImg['files'][0];
    this.ImgNameForInput = "L'image actuelle sera remplacé par '" + newImg.name + "'.";

    squareInput.style.background = "#194B3E";
    this.inputStatus = false;
  }

  public modalMsg(action) {
    if (action == "suppr") {
      this.modalMessage = this.newSponsorName + " n'est plus sur le site."
      this.modalActionOnElement = "supprimé";
    } else if (action == "change") {
      this.modalMessage =  "Les changements sur " + this.sponsor.name + " sont maintenant visible sur le site." ;
      this.modalActionOnElement = "modifé";
    }
    this.modal = true;
  }

  validateButton() {
    this.sponsor.level = this.selectedLevel;

    let uploadedImg = document.getElementById("img-input");
    if (uploadedImg != null) {
      let newImg = uploadedImg['files'][0];
      this.newSponsorImgName = newImg.name;
      this.sponsor.img = "./assets/" + this.newSponsorImgName;
      this.sponsorService.addImgInAssets(newImg).subscribe();
    }
    if (this.newSponsorName != null || this.newSponsorName != undefined) {
      this.sponsor.name = this.newSponsorName;
    }
    if (this.newSponsorLink != null || this.newSponsorLink != undefined) {
      this.sponsor.link = this.newSponsorLink;
    }
    this.sponsor.level = this.selectedLevel;
    if (this.sponsor.level == 1){
      this.sponsor.description = this.newSponsorDescription
    }
    this.sponsorService.editSponsor( this.sponsor.id ,this.sponsor).subscribe();

    this.modalMsg("change");
  };

  onMouseOver():void{
    document.getElementById("plusSignId").style.opacity = "1";
  }

  onMouseLeave():void{
    document.getElementById("plusSignId").style.opacity = "0.2";
  }

  suppSponsor() {
    this.sponsorService.deleteSponsor( this.sponsor.id ).subscribe();

    this.modalMsg("suppr");
  }
};
 
