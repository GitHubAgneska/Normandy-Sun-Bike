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
  private raceLink: string;
  private raceColor: string;
  public raceImg: string;


  private racePresentationService: RacePresentationService;
  public races: Race[];
  public race: Race;

  constructor(p_rService: RacePresentationService, route: ActivatedRoute) {

    this.racePresentationService = p_rService;
    this.raceTitle = route.snapshot.data.title;
    this.race = null;
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
          this.raceLink = 'https://www.thesuntrip.com/sun-trip-tour-2019/';
          // this.background.style.backgroundColor = '#D3BB58'
        } else if (this.raceTitle === 'The Sun Trip 2020' ) {
          this.race = this.races[1];
          this.raceColor = '#D3BB58';
          this.raceLink = 'https://www.thesuntrip.com/suntrip2020/';
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
