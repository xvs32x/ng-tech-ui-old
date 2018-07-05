import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonDirective } from './directives/button.directive';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    ButtonDirective
  ],
  declarations: [
    ButtonComponent,
    ButtonDirective
  ],
  providers: [],
})
export class ButtonModule {
}
