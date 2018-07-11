import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './components/text.component';
import { LabelComponent } from './components/label.component';
import { RadioComponent } from './components/radio.components';
import { RadioLabelDirective } from './directives/radio-label.directive';
import { InputTextDirective } from './directives/input-text.directive';
import { InputTextComponent } from './components/input-text.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports: [
    TextComponent,
    LabelComponent,
    RadioComponent,
    RadioLabelDirective,
    InputTextDirective,
    InputTextComponent
  ],
  declarations: [
    TextComponent,
    LabelComponent,
    RadioComponent,
    RadioLabelDirective,
    InputTextDirective,
    InputTextComponent
  ],
  providers: [],
})
export class FormModule {
}
