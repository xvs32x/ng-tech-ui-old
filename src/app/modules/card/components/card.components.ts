import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tech-card',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    ':host { background: #fff; box-shadow: 5px 5px #DDD; transition: box-shadow 0.3s ease-in-out; }',
    ':host:hover { box-shadow: 10px 10px #DDD; }',
  ],
})
export class CardComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
