import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  public logo = "../../assets/logoNSB_navbar.png";
  public topBarColor = "#06402B"

  ngOnInit() {
    window.addEventListener("scroll",() => {
      let navbar = document.getElementById("navbarContainer");
      let categories = document.getElementsByClassName("categorie");

      if (window.scrollY > 20){
        this.logo = "../../assets/logoNSB_blanc.png";
        navbar.style.background = this.topBarColor;
        for(let i = 0; i < categories.length; i++){
          categories[i].classList.add("categorie-color")
        }
      } else {
        this.logo = "../../assets/logoNSB_navbar.png";
        navbar.style.background = "#fff";
        for(let i = 0; i < categories.length; i++){
          categories[i].classList.remove("categorie-color")
        }
      }
    })
  }

  public togglePosition:boolean= false;

  toggle(){
  let navbar = document.getElementById("navbar");
  let navlinks = document.getElementById("navLinks");

    if (this.togglePosition == false) {

      this.togglePosition = true;

      navbar.style.height="100vh";
      navlinks.style.display="block";
      navbar.style.background = "#fff";
      window.scrollTo(0, 0);
      
    } else {

      this.togglePosition = false;

      navbar.style.height="10vh";
      navlinks.style.display="none";
      if (window.scrollY > 5){
        navbar.style.background = this.topBarColor;
      }
    }
  
  }

}
