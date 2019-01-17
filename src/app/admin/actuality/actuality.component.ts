import { Component, OnInit } from '@angular/core';
import { Actuality } from '../../classes/actuality';
import { ActualityService } from '../../services/actuality.service';

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

  public actuality:Actuality[];
  public actualityService:ActualityService;

  constructor(actualityService:ActualityService) { 
    this.actualityService = actualityService;
  }

  ngOnInit() {

    this.actualityService.getActuality().subscribe(
      (param)=>{ 
        this.actuality = param;
        if (this.actuality[0].position == 1) {
          this.sectionSelected('tripPlan');
        } else if (this.actuality[0].position == 2){
          this.sectionSelected('trip2019');
        } else if (this.actuality[0].position == 3) {
          this.sectionSelected('trip2020');
        }
      }
    )

    this.confirmationMsg(this.sectionNb);
    this.addCheckmark(this.prevSectionId);
  }

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

  public changeActualityPositionInDb(p_id:string) {
    if (p_id == 'tripPlan' ) {
      this.actuality[0].position = 1;
    } else if ( p_id == 'trip2019' ) {
      this.actuality[0].position = 2;
    } else if ( p_id == 'trip2020' ) {
      this.actuality[0].position = 3;
    }
  }

  public sectionSelected(p_id): void {
    let sectionBlock: HTMLElement = document.getElementById(this.prevSectionId);

    sectionBlock.classList.remove('selectedSection');

    const sectionId = p_id;
    this.changeActualityPositionInDb(p_id);
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

  public validatePositionChangeInDb() {
    this.actualityService.updateActuality(this.actuality[0]).subscribe()
  }

}
