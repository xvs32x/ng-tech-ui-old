import { Component, Input, OnInit } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tech-input-switch',
  template: `
    <button
      *ngFor="let state of states" class="switch-panel-item" (click)="setActive(state)"
      [ngClass]="{active: state.value}" [ngStyle]="{cursor: state.value ? 'default' : 'pointer'}">
      <fa-icon [icon]="state.value ? faCheck : faTimes"></fa-icon>
      {{state.name}}
    </button>
  `,
  styles: [
    ':host { display: inline-block; }',
    ':host button {color: #999; background: transparent; border: 1px solid #f1f3f5; cursor: pointer; ' +
    'line-height: 1em; padding: 0.9em; transition: background-color 0.3s ease-in-out; outline: none;}',
    ':host button.active { background: #f1f3f5; color: #000}'
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

  setActive(state: { name: string; value: boolean }): void {
    this.states = this.states.map(x => x.name === state.name ? ({...x, value: true}) : ({...x, value: false}));
  }

}
