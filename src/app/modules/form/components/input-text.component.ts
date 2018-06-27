import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-input-text',
  template: `
    <input type="text" placeholder="Text input placeholder">
    <div class="animated-line"></div>
  `,
  styles: [
    ':host { display: block; position: relative; }',
    ':host input { line-height: 1em; padding: 0.9em; border: 0; background: #f1f3f5; width: calc(100% - 1.8em); outline: none; ' +
      'transition: background-color 0.3s ease-in-out;}',
    ':host input:focus { background: #eaecef; }'
  ]
})
export class InputTextComponent implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

}
