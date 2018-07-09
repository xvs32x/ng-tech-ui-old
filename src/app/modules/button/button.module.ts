import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonDirective } from './directives/button.directive';
import { ButtonPrimaryDirective } from './directives/button-primary.directive';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    ButtonDirective,
    ButtonPrimaryDirective
  ],
  declarations: [
    ButtonDirective,
    ButtonPrimaryDirective
  ],
  providers: [],
})
export class ButtonModule {
}
