import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-label',
  template: `
    <label>
      <ng-content></ng-content>
    </label>
  `,
  styles: [
    ':host label { display: inline-block; font-size: 1.1em; padding: 1em; }',
    ':host.isCompact label { padding-bottom: 0 } '
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {
  @Input()
  @HostBinding('class.isCompact')
  isCompact = false;

  constructor() {
  }

  ngOnInit() {
  }

}
