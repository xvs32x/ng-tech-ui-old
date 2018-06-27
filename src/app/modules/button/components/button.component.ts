import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    ':host button {background: #f1f3f5; border: 1px solid #f1f3f5; cursor: pointer; line-height: 1em; padding: 0.9em; ' +
      'border-radius: 1px; transition: background-color 0.2s ease-in-out; outline: none;}',
  ]
})
export class ButtonComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
