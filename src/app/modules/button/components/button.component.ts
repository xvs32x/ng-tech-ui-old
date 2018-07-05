import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, group, AnimationBuilder
} from '@angular/animations';
import { Observable, Subscription } from 'rxjs';
import { AnimationMetadata } from '@angular/animations/src/animation_metadata';
import { map, skip, take } from 'rxjs/internal/operators';
import { TechVarsService } from '../../../services/tech-vars.service';
import { TechVarsElStyleI } from '../../../interfaces/tech-vars';

@Component({
  selector: 'app-tech-button',
  template: `
    <ng-content></ng-content>
    <!--<button [routerLink]="link.length ? link : []">-->
      <!--<ng-content></ng-content>-->
    <!--</button>-->
  `,
  // styles: [
  //   ':host { display: inline-block; }',
  //   ':host button { font-size: .9em; border: 0; cursor: pointer; line-height: 1em; padding: 1em; outline: none; font-weight: bold; }',
  // ],
  // animations: [
  //   trigger('switchState', [
  //     state('default', style({
  //       background: 'transparent',
  //       boxShadow: '0.2em 0.2em #d8dadc',
  //       color: '#999',
  //     })),
  //     state('primary', style({
  //       background: '#f1f3f5',
  //       boxShadow: '0.2em 0.2em #d8dadc',
  //       color: '#495057',
  //     })),
  //     state('clicked', style({
  //       background: '#f1f3f5',
  //       color: '#495057',
  //       boxShadow: ' inset 0.2em 0.2em #d8dadc',
  //       // transform: 'scale(1)'
  //     })),
  //     state('clicked-primary', style({
  //       background: '#f1f3f5',
  //       color: '#495057',
  //       boxShadow: ' inset 0.2em 0.2em #d8dadc',
  //     })),
  //     state('focused', style({
  //       background: 'transparent',
  //       color: '#999',
  //       boxShadow: ' 0.4em 0.4em #d8dadc',
  //       // transform: 'scale(1.1)'
  //     })),
  //     transition('* => clicked', group([
  //       animate('1ms ease-out', style({
  //         background: '#CCC',
  //         color: '#495057',
  //         boxShadow: ' inset 0.2em 0.2em #d8dadc',
  //         // transform: 'scale(1)'
  //       })),
  //       animate('300ms ease-out', style({
  //         background: '#f1f3f5',
  //       })),
  //     ])),
  //     transition('* => clicked-primary', group([
  //       animate('1ms ease-out', style({
  //         background: '#CCC',
  //         color: '#495057',
  //         boxShadow: ' inset 0.2em 0.2em #d8dadc',
  //       })),
  //       animate('300ms ease-out', style({
  //         background: '#f1f3f5',
  //       })),
  //     ])),
  //     transition('* => focused', group([
  //       animate('1ms ease-out', style({
  //         color: '#999',
  //         // transform: 'scale(1.1)'
  //       })),
  //       animate('300ms ease-out', style({
  //         background: 'transparent',
  //         boxShadow: ' 0.4em 0.4em #d8dadc',
  //       })),
  //     ])),
  //   ])
  // ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  vars: Observable<TechVarsElStyleI>;
  @Output() OnMouseOver: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnMouseOut: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnClick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() OnBlur: EventEmitter<null> = new EventEmitter<null>();
  @Input() state = 'default';
  @Input() link = [];

  constructor(private animationBuilder: AnimationBuilder, private el: ElementRef, varsService: TechVarsService) {
    this.vars = varsService.vars.pipe(map(x => x.button));
    // Run first animation one time
    const s1 = this.vars.pipe(take(1))
      .subscribe((styles: TechVarsElStyleI) => {
        this.runAnimation([
          style(styles.initial),
          animate(300, style(styles.default))
        ]);
      });
    this.subs.push(s1);
    // Run other animations
    const s2 = this.vars.pipe(skip(1))
      .subscribe((styles: TechVarsElStyleI) => {
        this.runAnimation([
          animate(300, style(styles.default))
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
  // @Output() OnClick: EventEmitter<null> = new EventEmitter<null>();
  // @Output() OnMouseOver: EventEmitter<null> = new EventEmitter<null>();
  // @Output() OnMouseOut: EventEmitter<null> = new EventEmitter<null>();
  // @Output() OnBlur: EventEmitter<null> = new EventEmitter<null>();
  // @Input() state = 'default';
  // @Input() link = [];

  // constructor() {
  // }
  //
  // ngOnInit() {
  // }
  //
  // @HostListener('mouseover', ['$event']) onMouseOver($event) {
  //   switch (this.state) {
  //     case 'default':
  //     case 'clicked':
  //       this.state = 'focused';
  //       break;
  //     case 'primary':
  //     case 'clicked-primary':
  //       this.state = 'focused-primary';
  //       break;
  //   }
  //   this.OnMouseOver.next($event);
  // }
  //
  // @HostListener('mouseout', ['$event']) onMouseOut($event) {
  //   this.OnMouseOver.next($event);
  // }
  //
  // onClick($event) {
  //   switch (this.state) {
  //     case 'primary':
  //     case 'clicked-primary':
  //       this.state = 'clicked-primary';
  //       break;
  //     default:
  //       this.state = 'clicked';
  //       break;
  //   }
  //   this.OnClick.next($event);
  // }

  // onBlur($event) {
  //   switch (this.state) {
  //     case 'primary':
  //     case 'clicked-primary':
  //       this.state = 'primary';
  //       break;
  //     default:
  //       this.state = 'default';
  //       break;
  //   }
  //   this.OnBlur.next($event);
  // }
}
