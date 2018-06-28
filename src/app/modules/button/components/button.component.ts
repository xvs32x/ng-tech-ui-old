import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    ':host button {background: #f1f3f5; box-shadow: 3px 3px #d8dadc; border: 0; cursor: pointer; line-height: 1em; padding: 0.9em; ' +
      'border-radius: 1px; transition: background-color 0.2s ease-in-out; outline: none; font-weight: bold; color: #333;}',
  ]
})
export class ButtonComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
