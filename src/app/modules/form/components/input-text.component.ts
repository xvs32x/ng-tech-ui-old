import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-input-text',
  template: `
    <input type="text" placeholder="Text input" (focus)="showLine()" (blur)="hideLine()">
    <div class="animated-line"></div>
  `,
  styles: [
    ':host { display: block; position: relative; }',
    ':host input { line-height: 1em; padding: 0.9em; border: 0; background: #f1f3f5; width: calc(100% - 1.8em); outline: none; }',
    ':host .animated-line { content: ""; display: block; height: 1px; width: 0; background: transparent;' +
      'transition: width .5s ease, background-color .5s ease; position: absolute; bottom: 0; }',
  ]
})
export class InputTextComponent implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  showLine(): void {
    const lineEl = this.el.nativeElement.getElementsByClassName('animated-line')[0];
    lineEl.style.width = '100%';
    lineEl.style.background = '#CCC';
  }

  hideLine(): void {
    const lineEl = this.el.nativeElement.getElementsByClassName('animated-line')[0];
    lineEl.style.width = '0';
    lineEl.style.background = 'transparent';
  }

}
