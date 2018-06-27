import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-card-body',
  template: `<ng-content></ng-content>`,
  styles: [
    ':host { display: block; padding: 1em; }'
  ]
})
export class CardBodyComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
