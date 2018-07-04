import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes, group
} from '@angular/animations';

@Component({
  selector: 'app-tech-button',
  template: `
    <button (click)="onClick($event)" (blur)="onBlur($event)" [routerLink]="link.length ? link : []" [@switchState]="state">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    ':host { display: inline-block; }',
    ':host button { font-size: inherit; border: 0; cursor: pointer; line-height: .9em; padding: 1em; outline: none; font-weight: bold; }',
  ],
  animations: [
    trigger('switchState', [
      state('default', style({
        background: 'transparent',
        boxShadow: '0.2em 0.2em #d8dadc',
        color: '#999',
      })),
      state('primary', style({
        background: '#f1f3f5',
        boxShadow: '0.2em 0.2em #d8dadc',
        color: '#495057',
      })),
      state('focused', style({
        background: '#f1f3f5',
        color: '#495057',
        boxShadow: ' inset 0.2em 0.2em #d8dadc',
      })),
      state('focused-primary', style({
        background: '#f1f3f5',
        color: '#495057',
        boxShadow: ' inset 0.2em 0.2em #d8dadc',
      })),
      transition('* => focused',  group([
        animate('1ms ease-out', style({
          background: '#CCC',
          color: '#495057',
          boxShadow: ' inset 0.2em 0.2em #d8dadc',
        })),
        animate('300ms ease-out', style({
          background: '#f1f3f5',
        })),
      ])),
      transition('* => focused-primary',  group([
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
export class ButtonComponent implements OnInit {
  @Output() OnClick: EventEmitter<null> = new EventEmitter<null>();
  @Output() OnMouseOver: EventEmitter<null> = new EventEmitter<null>();
  @Output() OnMouseOut: EventEmitter<null> = new EventEmitter<null>();
  @Output() OnBlur: EventEmitter<null> = new EventEmitter<null>();
  @Input() state = 'default';
  @Input() link = [];

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('mouseover', ['$event']) onMouseOver($event) {
    this.OnMouseOver.next($event);
  }

  @HostListener('mouseout', ['$event']) onMouseOut($event) {
    this.OnMouseOver.next($event);
  }

  onClick($event) {
    switch (this.state) {
      case 'primary':
      case 'focused-primary':
        this.state = 'focused-primary';
        break;
      default:
        this.state = 'focused';
        break;
    }
    this.OnClick.next($event);
  }

  onBlur($event) {
    switch (this.state) {
      case 'primary':
      case 'focused-primary':
        this.state = 'primary';
        break;
      default:
        this.state = 'default';
        break;
    }
    this.OnBlur.next($event);
  }
}
