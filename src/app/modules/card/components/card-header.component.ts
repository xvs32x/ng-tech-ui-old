import { Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { AnimationMetadata } from '@angular/animations/src/animation_metadata';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { Observable, Subscription } from 'rxjs';
import { TechVarsService } from '../../../services/tech-vars.service';
import { map, skip, take } from 'rxjs/internal/operators';

@Component({
  selector: 'app-tech-card-header',
  template: `<ng-content></ng-content>`,
  styles: [
    ':host { display: block; }'
  ]
})
export class CardHeaderComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  vars: Observable<TechVarsElStyleI>;
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseOut: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private animationBuilder: AnimationBuilder, private el: ElementRef, varsService: TechVarsService) {
    this.vars = varsService.vars.pipe(map(x => x.cardHeader));
    // Run first animation one time
    const s1 = this.vars.pipe(take(1))
      .subscribe((styles: TechVarsElStyleI) => {
        this.runAnimation([
          style(styles.initial),
          animate(300, style({...styles.initial, ...styles.default}))
        ]);
      });
    this.subs.push(s1);
    // Run other animations
    const s2 = this.vars.pipe(skip(1))
      .subscribe((styles: TechVarsElStyleI) => {
        this.runAnimation([
          animate(300, style({...styles.initial, ...styles.default}))
        ]);
      });
    this.subs.push(s2);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  @HostListener('mouseover', ['$event']) onMouseOver(e) {
    this.OnMouseOver.next(e);
    this.vars.subscribe((styles: TechVarsElStyleI) => {
      this.runAnimation([
        animate(300, style(styles.focused))
      ]);
    });
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e) {
    this.OnMouseOut.next(e);
    this.vars.subscribe((styles: TechVarsElStyleI) => {
      this.runAnimation([
        animate(300, style(styles.default))
      ]);
    });
  }

  @HostListener('click', ['$event']) onClick(e) {
    this.OnClick.next(e);
    this.vars.subscribe((styles: TechVarsElStyleI) => {
      this.runAnimation([
        animate(300, style(styles.clicked))
      ]);
    });
  }

  runAnimation(animations: AnimationMetadata | AnimationMetadata[]) {
    const animation = this.animationBuilder.build(animations);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }
}
