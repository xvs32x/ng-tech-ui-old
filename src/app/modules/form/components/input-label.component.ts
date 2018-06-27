import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-input-label',
  template: `
    <label>
      <ng-content></ng-content>
    </label>
  `,
  styles: [
    ':host { display: block; }',
    ':host label { line-height: 2.6em; }'
  ]
})
export class InputLabelComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
