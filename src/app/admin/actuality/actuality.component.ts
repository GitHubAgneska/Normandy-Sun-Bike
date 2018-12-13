import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.css']
})
export class ActualityComponent implements OnInit {

  public sections: any[] = [{ id: 'tripPlan', name: '\"planification\"' },
                            { id: 'trip2019', name: '\"Sun Trip Tour 2019\"' },
                            { id: 'trip2020', name: '\"Sun Trip 2020\"' }];

  public sectionNb: number = 0;
  public sectionId: string;
  public prevSectionId: string = 'tripPlan';
  public message: String;

  private confirmationMsg(p_sectionNb): void {
    this.message = 'La partie ' + this.sections[p_sectionNb].name + ' va être mise en avant !';
  }

  private addCheckmark(p_id): void {
    const img: HTMLImageElement = document.createElement('img');
    img.id = 'checkmark';
    img.src = 'assets/checkmark.png';
    img.alt = 'checkmark';
    img.style.cssText = 'position: absolute; top: 70%; left: 78%;';

    document.getElementById(p_id).appendChild(img);
  }

  private removeCheckmark(p_id): void {
    document.getElementById(p_id).removeChild(document.getElementById('checkmark'));
  }

  private sectionSelected(p_id): void {
    let sectionBlock: HTMLElement = document.getElementById(this.prevSectionId);

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

    this.removeCheckmark(this.prevSectionId);
    this.addCheckmark(sectionId);

    this.prevSectionId = sectionId;
  }

  constructor() { }

  ngOnInit() {
    this.confirmationMsg(this.sectionNb);
    this.addCheckmark(this.prevSectionId);
  }

}
