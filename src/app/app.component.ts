import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SwitchValueI } from './modules/form/interfaces/switch-value';

@Component({
  selector: 'app-root',
  template: `
    <app-card-demo></app-card-demo>
    <app-form-demo></app-form-demo>
  `,
  styles: []
})
export class AppComponent {


}
