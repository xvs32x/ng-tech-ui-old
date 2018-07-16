import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { TechVarsService } from '../../../services/tech-vars.service';
import { STATE_CLICKED, STATE_DEFAULT, STATE_FOCUSED } from '../../../constants/tech-state';
import { map } from 'rxjs/internal/operators';
import { AnimationMetadata } from '@angular/animations/src/animation_metadata';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';

@Directive({
  selector: '[appTechInputLabel]'
})
export class InputLabelDirective implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  vars: Observable<TechVarsElStyleI>;
  state: string;
  @Input() model: string;
  @Input() name: string;
  @Output() OnModelChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnBlur: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private animationBuilder: AnimationBuilder, private el: ElementRef, varsService: TechVarsService) {
    this.vars = varsService.vars.pipe(map(x => x.inputLabel));
    const s1 = this.vars.subscribe((styles: TechVarsElStyleI) => {
      this.setInitialStyles(styles);
    });
    this.subs.push(s1);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  @HostListener('mouseover', ['$event']) onMouseOver(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseOver.next(e);
    }
    this.switchState(300, STATE_FOCUSED);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseLeave.next(e);
    }
    this.switchState(300, STATE_DEFAULT);
  }

  @HostListener('click', ['$event']) onClick(e?) {
    if (e && this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
      this.model = this.name;
      this.OnModelChange.next(this.model);
    }
    this.switchState(100, STATE_CLICKED);
  }

  setInitialStyles(styles: TechVarsElStyleI) {
    this.state = STATE_DEFAULT;
    Object.keys(styles.default).forEach(k => {
      this.el.nativeElement.style[k] = styles.default[k];
    });
  }

  switchState(timings: number, state: string) {
    this.state = state;
    const s = this.vars.subscribe((styles: TechVarsElStyleI) => {
      this.runAnimation([
        animate(timings, style({
          ...styles[STATE_DEFAULT],
          ...styles[state]
        }))
      ]);
    });
    this.subs.push(s);
  }

  runAnimation(animations: AnimationMetadata | AnimationMetadata[]) {
    const animation = this.animationBuilder.build(animations);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }
}
