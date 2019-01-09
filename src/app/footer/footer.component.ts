import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let footer = document.getElementById("footer-container");

    let url = window.location.toString();
    console.log(url)

    if(url.includes("admin")){
      footer.style.display="none";
    }
  }

}
