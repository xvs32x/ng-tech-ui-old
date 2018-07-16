import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './components/text.component';
import { RadioComponent } from './components/radio.components';
import { RadioLabelDirective } from './directives/radio-label.directive';
import { InputTextDirective } from './directives/input-text.directive';
import { InputTextComponent } from './components/input-text.component';
import { InputLabelDirective } from './directives/input-label.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports: [
    TextComponent,
    RadioComponent,
    RadioLabelDirective,
    InputTextDirective,
    InputTextComponent,
    InputLabelDirective
  ],
  declarations: [
    TextComponent,
    RadioComponent,
    RadioLabelDirective,
    InputTextDirective,
    InputTextComponent,
    InputLabelDirective
  ],
  providers: [],
})
export class FormModule {
}
