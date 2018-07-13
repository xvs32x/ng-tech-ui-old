import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputTextDirective } from '../directives/input-text.directive';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';


@Component({
  selector: 'app-tech-input-text',
  template: `
    <input #child [placeholder]="placeholder" [type]="type" appTechInputText>
  `
})

export class InputTextComponent implements OnInit, OnDestroy, OnChanges {
  subs: Subscription[] = [];
  @Input() type = 'text';
  @Input() model: string;
  @Input() state;
  @Input() placeholder;
  @ViewChild(InputTextDirective) child: InputTextDirective;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.state.firstChange) {
      const s = this.child.vars.subscribe((styles: TechVarsElStyleI) => {
        this.child.setInitialStyles(styles);
      });
      this.subs.push(s);
    } else {
      this.child.switchState(300, changes.state.currentValue);
    }
  }
}
