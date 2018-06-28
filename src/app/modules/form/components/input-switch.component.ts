import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-tech-input-switch',
  template: `
    <button
      *ngFor="let state of states" class="switch-panel-item" (click)="setActive(state)"
      [ngClass]="{active: state.value}" [ngStyle]="{cursor: state.value ? 'default' : 'pointer'}"
      [@switchState]="state.value ? 'active' : 'inactive'">
        <fa-icon [icon]="state.value ? faCheck : faTimes"></fa-icon>
        {{state.name}}
    </button>
  `,
  styles: [
    ':host { display: inline-block; }',
    ':host button {position: relative; border: 0; cursor: pointer; line-height: 1em; padding: 0.9em; outline: none;}',
  ],
  animations: [
    trigger('switchState', [
      state('inactive', style({
        background: 'transparent',
        boxShadow: '3px 3px #d8dadc',
        color: '#999',
        top: '-3px'

      })),
      state('active',   style({
        background: '#f1f3f5',
        color: '#000',
        boxShadow: ' inset 3px 3px #d8dadc',
        top: '0px'
      })),
      transition('* => active', animate('300ms ease-out')),
    ])
  ]
})
export class InputSwitchComponent implements OnInit {
  @Input() states: { name: string; value: boolean }[] = [];
  public faCheck = faCheckCircle;
  public faTimes = faTimesCircle;

  constructor() {
  }

  ngOnInit() {
  }

  setActive(item: { name: string; value: boolean }): void {
    this.states = this.states.map(x => x.name === item.name ? ({...x, value: true}) : ({...x, value: false}));
  }

}
