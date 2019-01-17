import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RacePresentationService } from '../services/race-presentation.service';
import { Race } from '../race';

@Component({
  selector: 'app-races-presentation',
  templateUrl: './races-presentation.component.html',
  styleUrls: ['./races-presentation.component.css']
})
export class RacesPresentationComponent implements OnInit {

  public raceTitle: string;
  private raceText: string;
  private raceLink: string;
  private raceColor: string;
  public raceImg: string;





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
  private racePresentationService: RacePresentationService;
  public races: Race[];
  public race: Race;




  constructor(p_rService: RacePresentationService, route: ActivatedRoute) {

    this.racePresentationService = p_rService;
    this.raceTitle = route.snapshot.data.title;
    this.race = null;
  }

    if (this.raceTitle == "The Sun Trip Tour 2019") {
      this.raceText = this.raceText2019 ; 
      this.raceLink = this.linkRace2019;   
      this.raceImg = this.img2019
      this.raceColor = "#478952";
      // this.background.style.backgroundColor = "#D3BB58"
    }
    else if (this.raceTitle == "The Sun Trip 2020" ){
      this.raceText = this.raceText2020;
      this.raceLink = this.linkRace2020;   
      this.raceImg = this.img2020;
      this.raceColor = "#D3BB58";
      // this.background.style.backgroundColor = "#D3BB58"
    }
   }
 


  private img2019: string = '../../assets/2019-landing.jpg';
  private img2020: string = '../../assets/2020-landing.jpg';

  ngOnInit(): void {

    const background = document.getElementById('race-description');

    this.racePresentationService.getAll().subscribe(
      (result: Race[]) => {
        this.races = result;

        if (this.raceTitle === 'The Sun Trip Tour 2019') {
          this.race = this.races[0];
          this.raceColor = '#478952';
          // this.background.style.backgroundColor = '#D3BB58'
        } else if (this.raceTitle === 'The Sun Trip 2020' ) {
          this.race = this.races[1];
          this.raceColor = '#D3BB58';
          // this.background.style.backgroundColor = '#D3BB58'
        }

        background.style.background = this.raceColor;
      }
    );

    if (this.raceTitle === 'The Sun Trip Tour 2019') {
      this.raceImg = this.img2019;
    } else if (this.raceTitle === 'The Sun Trip 2020' ) {
      this.raceImg = this.img2020;
    }

  }
}
