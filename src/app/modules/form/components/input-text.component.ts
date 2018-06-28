import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-tech-input-text',
  template: `
    <input
      type="text" [placeholder]="placeholder" (focus)="changeState('focused')" (blur)="changeState('default')" [@switchState]="state"
      [ngClass]="{default: state === 'default', focused: state === 'focused', success: state === 'success', error: state === 'error'}"
    >
  `,
  styles: [
    ':host { display: block; position: relative; }',
    ':host input { line-height: 1em; padding: 0.9em; border: 0; width: calc(100% - 1.8em); outline: none; }',
    // ':host input.default { background: #f1f3f5; }',
    // ':host input.focused { background: #eaecef; }',
    // ':host input.success { background: #D6EFE2; }',
    // ':host input.error { background: #EFD1D3; }',
  ],
  animations: [
    trigger('switchState', [
      state('default', style({
        background: '#f1f3f5'
      })),
      state('focused',   style({
        background: '#eaecef'
      })),
      state('success',   style({
        background: '#D6EFE2'
      })),
      state('error',   style({
        background: '#EFD1D3'
      })),
      transition('* => *', animate('300ms ease-out')),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements OnInit, OnChanges {
  @Input() state = 'default';
  @Input() placeholder = '';
  public focused: boolean;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.state.currentValue === 'focused') {
      setTimeout(() => {
        this.el.nativeElement.children[0].focus();
      });
    }
  }

  changeState(state): void {
    this.state = state;
  }

}
