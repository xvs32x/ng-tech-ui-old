import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
  ],
  declarations: [
    ButtonComponent,
  ],
  providers: [],
})
export class ButtonModule {
}
