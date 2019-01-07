import { Component, OnInit } from '@angular/core';
import {TweenMax, Power4} from 'gsap/TweenMax';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-races-presentation',
  templateUrl: './races-presentation.component.html',
  styleUrls: ['./races-presentation.component.css']
})
export class RacesPresentationComponent implements OnInit {

  public raceTitle: string;
  private raceText: string;
  private raceLink: string;
  private raceImg: string;
  private raceColor: string;
  private blogBackTitle: string;

  private raceText2019:string = `Après 3 éditions sur les routes du monde, le petit frère (Sun Trip Tour)
  revient pour une 2eme édition qui se déroulera pendant 15 jours sur 1400 kilomètres
  environ en région Auvergne –Rhône Alpes et un peu en Italie plus accessible avec moins de
  contraintes techniques. Un parcours montagneux (Col de L’Iseran et Col de l’Agnel à plus de
  2700 mètres et mythique Col du Mont Cenis) mais que tous peuvent faire. Tous les
  participants se retrouvent tous les deux jours en moyenne pour des temps d’échange et de
  rencontre. Mais aussi un test en conditions réelles pour éprouver le pilote et la machine
  pour la gestion de l’énergie, des freins…..`;
  
  private linkRace2019: string = "https://www.thesuntrip.com/sun-trip-tour-2019/";
  private img2019: string = "../../assets/2019-landing.jpg";

  private raceText2020:string = `A l’image d’un « Vendée Globe Terrestre », la plus grande aventure terrestre
  du monde, les règles sont simples: Un point de départ, un point d’arrivée et la grande liberté
  entre les deux, le Sun Trip c’est avant tout une aventure sans assistance, où chacun prend
  ses responsabilités. En 2013, c’était direction le Kazakhstan. En 2015, une boucle au départ
  de Milan direction Antalya et la Turquie. En 2018, Lyon-Canton (Chine) pour plus de 13000
  kilomètres effectué pour le premier en 45 Jours et pour le dernier en 106 jours…. Chacun a
  pu aller à son rythme plaçant le curseur où il souhaitait entre performance sportive et
  chemins de traverse et découvertes…En 2020, êtes-vous prêts à suivre mes pérégrinations
  que vous pourrez suivre via les réseaux sociaux et ce site ?`;
  
  private linkRace2020: string = "https://www.thesuntrip.com/2020-edition/";
  private img2020: string = "../../assets/2020-landing.jpg";
  
  private raceBackgroundImg:string = "https://www.thesuntrip.com/2020-edition/";
  private scrollButton:string = "Blog";


  constructor(route: ActivatedRoute) {
    
    this.raceTitle = route.snapshot.data.title;

    if (this.raceTitle == "The Sun Trip Tour 2019") {
      this.raceText = this.raceText2019 ; 
      this.raceLink = this.linkRace2019;   
      this.raceImg = this.img2019
      this.raceColor = "#478952";
      this.blogBackTitle = `RHONES<br/>- ALPES<br/>2019 - `;
      // this.background.style.backgroundColor = "#D3BB58"
    }
    else if (this.raceTitle == "The Sun Trip 2020" ){
      this.raceText = this.raceText2020;
      this.raceLink = this.linkRace2020;   
      this.raceImg = this.img2020;
      this.raceColor = "#D3BB58"; 
      this.blogBackTitle = `LYON -<br/>- CANTON<br/>- - 2020`;
      // this.background.style.backgroundColor = "#D3BB58"
    }
   }


  


  ngOnInit() {

    let background = document.getElementById("race-description");
    let blogBackground = document.getElementById("race-background");

    background.style.background = this.raceColor;
    blogBackground.style.color = this.raceColor;

  }

// SCROLL

  
    
    // Click
    scrollClickButton(element) {

      const page = document.getElementById("race-description-container")
      
      if (element == "race") {
        page.style.marginTop = "0";
      } else if (element =="blog") {
        page.style.marginTop = "-88vh";
      }
      
    };
    
    ngOnDestroy(){
      window.scrollTo(0,0);
    }
  }
