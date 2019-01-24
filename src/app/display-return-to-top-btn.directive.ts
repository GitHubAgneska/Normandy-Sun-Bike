import { Directive, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDisplayReturnToTopBtn]'
})
export class DisplayReturnToTopBtnDirective implements OnDestroy, AfterViewInit {

  private el: ElementRef;

  constructor(p_el: ElementRef) {
    this.el = p_el;
    this.scrollFunction = this.scrollFunction.bind(this);
    window.addEventListener('scroll', this.scrollFunction);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollFunction);
  }

  public scrollFunction(): void {
    if (window.scrollY > 100) {
    this.el.nativeElement.style.display = 'flex';
    } else {
    this.el.nativeElement.style.display = 'none';
    }
  }

  ngAfterViewInit(): void {
    this.scrollFunction();
  }

}

