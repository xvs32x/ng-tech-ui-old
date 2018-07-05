import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { animate, AnimationBuilder, style } from '@angular/animations';

@Component({
  selector: 'app-tech-card',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    // ':host { background: #fff; box-shadow: 5px 5px #d8dadc;/* transition: box-shadow 0.3s ease-in-out; */}',
    // ':host:hover { box-shadow: 10px 10px #d8dadc; }',
  ],
  // animations: [
  //   trigger('switchState', [
  //     state('default', style({
  //       background: 'transparent',
  //       boxShadow: '0.2em 0.2em #d8dadc',
  //       color: '#999',
  //     })),
  //     transition('* => clicked', group([
  //       animate('1ms ease-out', style({
  //         background: '#CCC',
  //         color: '#495057',
  //         boxShadow: ' inset 0.2em 0.2em #d8dadc',
  //       })),
  //       animate('300ms ease-out', style({
  //         background: '#f1f3f5',
  //       })),
  //     ])),
  //   ])
  // ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  constructor(private animation: AnimationBuilder, private el: ElementRef) {
    const foo = this.animation.build([
      style({ background: '#fff' }),
      animate(1000, style({ background: '#000' }))
    ]);
    const player = foo.create(this.el.nativeElement);
    player.play();
  }

  ngOnInit() {
  }
}
