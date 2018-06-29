import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
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
      [ngModel]="model" (ngModelChange)="onModelChange($event)"
      type="text" [placeholder]="placeholder" (focus)="changeState('focused')" (blur)="changeState('default')" [@switchState]="state"
    >
  `,
  styles: [
    ':host { display: block; position: relative; }',
    ':host input { line-height: 1em; padding: 0.9em; border: 0; width: calc(100% - 1.8em); outline: none; }',
  ],
  animations: [
    trigger('switchState', [
      state('default', style({
        background: '#f1f3f5'
      })),
      state('focused', style({
        background: '#eaecef'
      })),
      state('success', style({
        background: '#D6EFE2'
      })),
      state('error', style({
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
  @Input() model = '';
  @Output() OnModelChange: EventEmitter<string> = new EventEmitter<string>();
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

  onModelChange($event) {
    this.OnModelChange.next($event);
  }

  changeState(item): void {
    this.state = item;
  }

}
