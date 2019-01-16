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

  private racePresentationService: RacePresentationService;
  public races: Race[];
  public race: Race;

  constructor(p_rService: RacePresentationService, route: ActivatedRoute) {

    this.racePresentationService = p_rService;
    this.raceTitle = route.snapshot.data.title;
    this.race = null;
  }

  public raceTitle: string;
  private raceImg: string;
  private raceColor: string;

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
