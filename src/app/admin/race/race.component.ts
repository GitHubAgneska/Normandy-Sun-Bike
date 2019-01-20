import { Component, OnInit } from '@angular/core';
import { RacePresentationService } from '../../services/race-presentation.service';
import { Race } from '../../race';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})

export class RaceComponent implements OnInit {

  private racePresentationService: RacePresentationService;
  public races: Race[];
  public race: Race;
  public raceSelector: number = 0;
  public confirmAlert: String;

   // Modal
   public modal:boolean = false;
   public modalElementName:string = "La course";
   public modalActionOnElement:string = "modifié";
   public modalMessage:string;
   public modalRaceName:string = "Sun trip tour 2019";

  constructor(p_racePresentationService: RacePresentationService) {
    this.racePresentationService = p_racePresentationService;
    this.race = null;
  }

  ngOnInit(): void {
    this.racePresentationService.getAll().subscribe(
      (result: Race[]) => {
        this.races = result;
        this.race = this.races[this.raceSelector];
      }
    );
  }

  public selectedRace(p_id): void {
    const race2019 = document.getElementById('trip2019');
    const race2020 = document.getElementById('trip2020');

    if (p_id === 'trip2019') {
      race2019.classList.add('selected');
      race2020.classList.remove('selected');
      this.race = this.races[0];
      this.modalRaceName = "Sun trip tour 2019";
    } else {
      race2019.classList.remove('selected');
      race2020.classList.add('selected');
      this.race = this.races[1];
      this.modalRaceName = "Sun trip tour 2020";
    }
  }

  public modalMsg() {
    this.modalMessage = "Le nouveau texte de " + this.modalRaceName +" est visible sur le site";
    this.modal = true;
  }

  public update(p_race: Race): void {

    
    this.racePresentationService.editRace(p_race.id, p_race).subscribe(
      // get response from server and edit the created question
      (data: Race) => {
        this.ngOnInit();
      }
    );
    this.raceSelector = p_race.id - 1;

      this.modalMsg();

    // this.confirmAlert = 'La présentation du ' + p_race.name + ' vient d\'être mise à jour.';
    // alert(this.confirmAlert);

  }

}
