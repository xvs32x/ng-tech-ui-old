import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-input-text',
  template: `
    <input type="text" placeholder="Text input">
  `,
  styles: [
    ':host {display: block}',
    ':host input { line-height: 1em; padding: 0.9em; border: 0; background: #f1f3f5}'
  ]
})
export class InputTextComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
