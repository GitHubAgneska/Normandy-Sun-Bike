import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  private selectedRace(p_id): void {
    const race2019 = document.getElementById('trip2019');
    const race2020 = document.getElementById('trip2020');

    if (p_id === 'trip2019') {
      race2019.classList.add('selected');
      race2020.classList.remove('selected');
    } else {
      race2019.classList.remove('selected');
      race2020.classList.add('selected');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
