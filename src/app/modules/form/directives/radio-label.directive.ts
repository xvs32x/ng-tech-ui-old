import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { STATE_CLICKED, STATE_DEFAULT, STATE_FOCUSED } from '../../../constants/tech-state';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';
import { map } from 'rxjs/internal/operators';
import { TechVarsService } from '../../../services/tech-vars.service';
import { AnimationMetadata } from '@angular/animations/src/animation_metadata';

@Directive({
  selector: '[appTechRadioLabel]'
})
export class RadioLabelDirective implements OnInit, OnDestroy, AfterViewInit {
  subs: Subscription[] = [];
  vars: Observable<TechVarsElStyleI>;
  state: string;

  constructor(private animationBuilder: AnimationBuilder, private el: ElementRef, varsService: TechVarsService) {
    this.vars = varsService.vars.pipe(map(x => x.radioLabel));
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
  }

  setInitialStyles(styles: TechVarsElStyleI) {
    this.state = STATE_DEFAULT;
    Object.keys(styles.default).forEach(k => {
      this.el.nativeElement.style[k] = styles.default[k];
    });
  }

}
