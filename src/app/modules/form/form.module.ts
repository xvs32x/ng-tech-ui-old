import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './components/text.component';
import { LabelComponent } from './components/label.component';
import { RadioComponent } from './components/radio.components';
import { RadioLabelDirective } from './directives/radio-label.directive';

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
    RadioLabelDirective
  ],
  declarations: [
    TextComponent,
    LabelComponent,
    RadioComponent,
    RadioLabelDirective
  ],
  providers: [],
})
export class FormModule {
}
