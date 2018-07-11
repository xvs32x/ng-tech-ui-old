import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tech-input-text',
  template: `
    <input [placeholder]="placeholder" [type]="type" appTechInputText>
  `
})

export class InputTextComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  @Input() type = 'text';
  @Input() model: string;
  @Input() state;
  @Input() placeholder;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
