import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button.component';
import { ButtonOutlineDirective } from './direcitves/button-outline.directive';


@NgModule({
  imports: [],
  exports: [
    ButtonComponent,
    ButtonOutlineDirective
  ],
  declarations: [
    ButtonComponent,
    ButtonOutlineDirective
  ],
  providers: [],
})
export class ButtonModule {
}
