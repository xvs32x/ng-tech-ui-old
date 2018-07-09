import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AnimationMetadata } from '@angular/animations/src/animation_metadata';
import { map, skip, take } from 'rxjs/internal/operators';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { TechVarsService } from '../../../services/tech-vars.service';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';

@Directive({
  selector: '[appTechButtonPrimary]'
})
export class ButtonPrimaryDirective implements OnInit, OnDestroy, AfterViewInit {
  subs: Subscription[] = [];
  vars: Observable<TechVarsElStyleI>;
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseLeave: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private animationBuilder: AnimationBuilder, private el: ElementRef, varsService: TechVarsService) {
    this.vars = varsService.vars.pipe(map(x => x.buttonPrimary));
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

  @HostListener('mouseover', ['$event']) onMouseOver(e) {
    this.OnMouseOver.next(e);
    this.vars.subscribe((styles: TechVarsElStyleI) => {
      this.runAnimation([
        animate(300, style(styles.focused))
      ]);
    });
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e) {
    this.OnMouseLeave.next(e);
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
        animate(100, style(styles.clicked))
      ]);
    });
  }

  setInitialStyles(styles: TechVarsElStyleI) {
    Object.keys(styles.default).forEach(k => {
      this.el.nativeElement.style[k] = styles.default[k];
    });
  }

  runAnimation(animations: AnimationMetadata | AnimationMetadata[]) {
    const animation = this.animationBuilder.build(animations);
    const player = animation.create(this.el.nativeElement);
    player.play();
  }
}
