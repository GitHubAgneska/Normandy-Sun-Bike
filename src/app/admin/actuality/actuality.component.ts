import { Component, OnInit } from '@angular/core';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.css']
})
export class ActualityComponent implements OnInit {

  public sections: any[] = [{ id: 'tripPlan', name: '\"plannification\"' },
                            { id: 'trip2019', name: '\"Sun Trip Tour 2019\"' },
                            { id: 'trip2020', name: '\"Sun Trip 2020\"' }];

  public highlightedSection: number;
  public markup: String = '<img class="checkMark" src="assets/checkmark.png"/>';
  public message: String = '';

  confirmationMsg(): void {
    this.message = 'La partie ' + this.sections[1].name + 'est désormais mise en avant !';
  }

  constructor() { }

  ngOnInit() {

  }

}
