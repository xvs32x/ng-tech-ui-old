import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-card-footer',
  template: `<ng-content></ng-content>`,
  styles: [
    ':host { display: block; border-top: 1px solid #e9ecef; padding: 1em;  }'
  ]
})
export class CardFooterComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
