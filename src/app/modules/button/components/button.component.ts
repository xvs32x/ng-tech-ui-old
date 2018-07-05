import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, group
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
    ':host button { font-size: .9em; border: 0; cursor: pointer; line-height: 1em; padding: 1em; outline: none; font-weight: bold; }',
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
      state('clicked', style({
        background: '#f1f3f5',
        color: '#495057',
        boxShadow: ' inset 0.2em 0.2em #d8dadc',
        // transform: 'scale(1)'
      })),
      state('clicked-primary', style({
        background: '#f1f3f5',
        color: '#495057',
        boxShadow: ' inset 0.2em 0.2em #d8dadc',
      })),
      state('focused', style({
        background: 'transparent',
        color: '#999',
        boxShadow: ' 0.4em 0.4em #d8dadc',
        // transform: 'scale(1.1)'
      })),
      transition('* => clicked', group([
        animate('1ms ease-out', style({
          background: '#CCC',
          color: '#495057',
          boxShadow: ' inset 0.2em 0.2em #d8dadc',
          // transform: 'scale(1)'
        })),
        animate('300ms ease-out', style({
          background: '#f1f3f5',
        })),
      ])),
      transition('* => clicked-primary', group([
        animate('1ms ease-out', style({
          background: '#CCC',
          color: '#495057',
          boxShadow: ' inset 0.2em 0.2em #d8dadc',
        })),
        animate('300ms ease-out', style({
          background: '#f1f3f5',
        })),
      ])),
      transition('* => focused', group([
        animate('1ms ease-out', style({
          color: '#999',
          // transform: 'scale(1.1)'
        })),
        animate('300ms ease-out', style({
          background: 'transparent',
          boxShadow: ' 0.4em 0.4em #d8dadc',
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
    switch (this.state) {
      case 'default':
      case 'clicked':
        this.state = 'focused';
        break;
      case 'primary':
      case 'clicked-primary':
        this.state = 'focused-primary';
        break;
    }
    this.OnMouseOver.next($event);
  }

  @HostListener('mouseout', ['$event']) onMouseOut($event) {
    this.OnMouseOver.next($event);
  }

  onClick($event) {
    switch (this.state) {
      case 'primary':
      case 'clicked-primary':
        this.state = 'clicked-primary';
        break;
      default:
        this.state = 'clicked';
        break;
    }
    this.OnClick.next($event);
  }

  onBlur($event) {
    switch (this.state) {
      case 'primary':
      case 'clicked-primary':
        this.state = 'primary';
        break;
      default:
        this.state = 'default';
        break;
    }
    this.OnBlur.next($event);
  }
}
