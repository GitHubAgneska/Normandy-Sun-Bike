import { Directive, Input, TemplateRef, ViewContainerRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDisplayNewSponsorField]'
})

export class DisplayNewSponsorFieldDirective {


  constructor(private tplRef : TemplateRef <any>, private vwRef:ViewContainerRef) { }
 

  @Input() set appDisplayNewSponsorField(el : HTMLBaseElement) {

    el.addEventListener('click', () => { 

      this.vwRef.clear();
      this.vwRef.createEmbeddedView(this.tplRef);

    })
    
  }
 

}
