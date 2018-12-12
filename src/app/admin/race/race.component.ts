import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  public raceDescription: any = {r2019: 'Description du Sun Trip Tour 2019.', r2020: 'Description du Sun Trip 2020.'};
  public textArea: String;

  private selectedRace(p_id): void {
    const race2019 = document.getElementById('trip2019');
    const race2020 = document.getElementById('trip2020');

    if (p_id === 'trip2019') {
      race2019.classList.add('selected');
      race2020.classList.remove('selected');
      this.textArea = this.raceDescription.r2019;
    } else {
      race2019.classList.remove('selected');
      race2020.classList.add('selected');
      this.textArea = this.raceDescription.r2020;
    }
  }

  constructor() { }

  ngOnInit() {
    this.textArea = this.raceDescription.r2019;
  }

}
