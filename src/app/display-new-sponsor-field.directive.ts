import { Directive, Input, TemplateRef, ViewContainerRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDisplayNewSponsorField]'
})

export class DisplayNewSponsorFieldDirective {


  constructor(private tplRef : TemplateRef <any>, private vwRef:ViewContainerRef) { }
  
  @HostListener('click') onclick() {
    this.appDisplayNewSponsorField = true;
  }


  @Input() set appDisplayNewSponsorField(condition:boolean) {
    if (this.appDisplayNewSponsorField == true){
      this.vwRef.createEmbeddedView(this.tplRef);
    }else{
      this.vwRef.clear();

    }
  }



 /*  @Input() set appDisplayNewSponsorField(el : HTMLBaseElement) {

    el.addEventListener('click', () => { 

      this.vwRef.clear();
      this.vwRef.createEmbeddedView(this.tplRef);

    })
    
  } */
 

}
