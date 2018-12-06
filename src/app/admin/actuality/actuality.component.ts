import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.css']
})
export class ActualityComponent implements OnInit {

  public sections: any[] = [{ id: 'tripPlan', name: '\"plannification\"' },
                            { id: 'trip2019', name: '\"Sun Trip Tour 2019\"' },
                            { id: 'trip2020', name: '\"Sun Trip 2020\"' }];

  public markup: String = '<img class="checkMark" src="assets/checkmark.png"/>';
  public sectionNb: number = 0;
  public sectionId = 'tripPlan';
  public message: String;

  confirmationMsg(p_sectionNb): void {
    this.message = 'La partie ' + this.sections[p_sectionNb].name + ' va être mise en avant !';
  }

  sectionSelected(p_id): void {
    let sectionBlock: HTMLElement = document.getElementById(this.sectionId);

    sectionBlock.classList.remove('selectedSection');

    const sectionId = p_id;
    const messagePart: HTMLElement = document.getElementById('confirmationMessage');

    for (let i = 0; i < this.sections.length; i++) {
      if (sectionId === this.sections[i].id) {
        this.sectionNb = i;
      }
    }

    this.confirmationMsg(this.sectionNb);

    messagePart.setAttribute('style', 'opacity:1');

    sectionBlock = document.getElementById(sectionId);
    sectionBlock.classList.add('selectedSection');
  }

  constructor() { }

  ngOnInit() {
    this.confirmationMsg(this.sectionNb);
  }

}
