import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSquare as faSquareRegular } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition, group
} from '@angular/animations';
import { SwitchValueI } from '../interfaces/switch-value';

@Component({
  selector: 'app-tech-input-switch',
  template: `
    <button
      *ngFor="let state of values" (click)="setActive(state)"
      [@switchState]="state.value ? 'active' : 'inactive'">
      <fa-icon [icon]="state.value ? yes : no"></fa-icon>
      {{state.name}}
    </button>
  `,
  styles: [
    ':host { display: inline-block; }',
    ':host button { background: #ccc; border: 0; line-height: 1em; padding: 1em; outline: none; font-weight: bold; }',
  ],
  animations: [
    trigger('switchState', [
      state('inactive', style({
        background: 'transparent',
        boxShadow: '0.2em 0.2em #d8dadc',
        color: '#999',
        cursor: 'pointer'
      })),
      state('active', style({
        background: '#f1f3f5',
        color: '#495057',
        boxShadow: 'inset 0.2em 0.2em #d8dadc',
      })),
      transition('* => active',  group([
        animate('1ms ease-out', style({
          background: '#CCC',
          color: '#495057',
          boxShadow: ' inset 0.2em 0.2em #d8dadc',
        })),
        animate('300ms ease-out', style({
          background: '#f1f3f5',
        })),
      ])),
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
