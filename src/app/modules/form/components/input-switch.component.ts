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
    <div *ngIf="!isCompact">
      <button
        *ngFor="let item of items" (click)="setActive(item)"
        [@switchState]="item.name === value ? 'active' : 'inactive'">
        <fa-icon [icon]="item.name === value ? yes : no"></fa-icon>
        {{item.label ? item.label : item.name}}
      </button>
    </div>
    <div *ngIf="isCompact && !isMultiple">
      <div *ngFor="let item of items">
        <label>
          <input
            type="radio"
            name="model"
            [value]="item.name"
            [(ngModel)]="value"
            (change)="setActive(item)">
          {{item.label ? item.label : item.name}}
        </label>
      </div>
    </div>
  `,
  styles: [
    ':host { display: inline-block; }',
    ':host button { font-size: inherit; background: #ccc; border: 0; line-height: .9em; padding: .9em; outline: none; font-weight: bold; }',
    ':host input[type="radio"] { margin: .66em 0; }',
    ':host label { cursor: pointer; }'
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
  @Input() items: SwitchValueI[] = [];
  @Input() value: string = null;
  @Input() isMultiple: false;
  @Input() isCompact = false;
  @Output() OnChange: EventEmitter<SwitchValueI> = new EventEmitter<SwitchValueI>();
  public yes = faSquareRegular;
  public no = faSquare;

  constructor() {
  }

  ngOnInit() {
  }

  setActive(item: SwitchValueI): void {
    this.value = item.name;
    this.OnChange.next(item);
  }

}
