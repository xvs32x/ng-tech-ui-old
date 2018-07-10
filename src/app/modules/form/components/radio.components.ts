import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { AnimationMetadata } from '@angular/animations/src/animation_metadata';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { TechVarsService } from '../../../services/tech-vars.service';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';
import { STATE_CLICKED, STATE_DEFAULT, STATE_FOCUSED } from '../../../constants/tech-state';

@Component({
  selector: 'app-tech-radio-component',
  template: `
    <button (blur)="onBlur($event)" appTechRadioLabel>
      <ng-content></ng-content>
    </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RadioComponent implements OnInit, OnDestroy, AfterViewInit {
  subs: Subscription[] = [];
  vars: Observable<TechVarsElStyleI>;
  state: string;
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnBlur: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private animationBuilder: AnimationBuilder, private el: ElementRef, varsService: TechVarsService) {
    this.vars = varsService.vars.pipe(map(x => x.radio));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  ngAfterViewInit() {
    const s1 = this.vars.subscribe((styles: TechVarsElStyleI) => {
      this.setInitialStyles(styles);
    });
    this.subs.push(s1);
    this.el.nativeElement.onblur = () => {
      this.onBlur();
    };
  }

  @HostListener('mouseover', ['$event']) onMouseOver(e?) {
    if (this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseOver.next(e);
    }
    this.switchState(300, STATE_FOCUSED);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e?) {
    if (this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnMouseLeave.next(e);
    }
    this.switchState(300, STATE_DEFAULT);
  }

  @HostListener('click', ['$event']) onClick(e) {
    if (this.state === STATE_CLICKED) {
      return;
    }
    if (e) {
      this.OnClick.next(e);
    }
    this.switchState(100, STATE_CLICKED);
  }

  @HostListener('onblur', ['$event']) onBlur(e?) {
    console.log(123);
    if (e) {
      this.OnBlur.next(e);
    }
    this.switchState(300, STATE_DEFAULT);
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
        animate(timings, style(styles[state]))
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
