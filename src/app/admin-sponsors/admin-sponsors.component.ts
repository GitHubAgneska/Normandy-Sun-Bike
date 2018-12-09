import { Component, OnInit } from '@angular/core';
import { Sponsor } from './sponsorClass';
import { SPONSORS } from './mock-sponsors';

@Component({
  selector: 'app-admin-sponsors',
  templateUrl: './admin-sponsors.component.html',
  styleUrls: ['./admin-sponsors.component.css']
})
export class AdminSponsorsComponent implements OnInit {


  sponsors = SPONSORS;

  // create new sponsor field - directive 
  public diplayNewSponsorFields:boolean = true;

  // delete sponsor button
  



  constructor() { }

  ngOnInit() {

   /*  const fileInput = document.getElementById('file-input');
    const output = document.getElementById('output');

    function doSomethingWithFiles(fileList) {
      let file = null;
  
      for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].type.match(/^image\//)) {
          file = fileList[i];
          break;
        }
      }
  
        if (file !== null) {
          output.src = URL.createObjectURL(file);
      }
    }
  
      fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files)); */
  }




  
      
  

}
