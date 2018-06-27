import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-card-header',
  template: `<ng-content></ng-content>`,
  styles: [
    ':host { display: block; padding: 1em; border-bottom: 1px solid #e9ecef; }'
  ]
})
export class CardHeaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
