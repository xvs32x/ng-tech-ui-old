import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSquare as faSquareRegular} from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { SwitchValueI } from '../interfaces/switch-value';

@Component({
  selector: 'app-tech-input-switch',
  template: `
    <button
      *ngFor="let state of values" class="switch-panel-item" (click)="setActive(state)"
      [ngClass]="{active: state.value}" [ngStyle]="{cursor: state.value ? 'default' : 'pointer'}"
      [@switchState]="state.value ? 'active' : 'inactive'">
      <fa-icon [icon]="state.value ? yes : no"></fa-icon>
      {{state.name}}
    </button>
  `,
  styles: [
    ':host { display: inline-block; }',
    ':host button {position: relative; border: 0; cursor: pointer; line-height: 1em; padding: 0.9em; outline: none; font-weight: bold;}',
  ],
  animations: [
    trigger('switchState', [
      state('inactive', style({
        background: 'transparent',
        boxShadow: '0.2em 0.2em #d8dadc',
        color: '#999',

      })),
      state('active', style({
        background: '#f1f3f5',
        color: '#333',
        boxShadow: ' inset 0.2em 0.2em #d8dadc',
      })),
      transition('* => active', animate('300ms ease-out')),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSwitchComponent implements OnInit {
  @Input() values: SwitchValueI[] = [];
  @Output() OnChange: EventEmitter<SwitchValueI> = new EventEmitter<SwitchValueI>();
  public yes = faSquareRegular;
  public no = faSquare;

  constructor() {
  }

  ngOnInit() {
  }

  setActive(item: { name: string; value: boolean }): void {
    this.values = this.values.map(x => x.name === item.name ? ({...x, value: true}) : ({...x, value: false}));
    this.OnChange.next(item);
  }

}
