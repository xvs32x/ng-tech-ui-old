import { Directive, ElementRef } from '@angular/core';

@Directive({selector: '[appTechButtonOutline]'})
export class ButtonOutlineDirective {
  constructor(el: ElementRef) {
    setTimeout(() => {
      el.nativeElement.children[0].style.background = 'transparent';
      el.nativeElement.children[0].style.color = '#999';
    });
  }
}
