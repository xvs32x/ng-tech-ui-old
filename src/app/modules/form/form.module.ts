import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './components/text.component';
import { LabelComponent } from './components/label.component';
import { RadioComponent } from './components/radio.components';

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
    RadioComponent
  ],
  declarations: [
    TextComponent,
    LabelComponent,
    RadioComponent
  ],
  providers: [],
})
export class FormModule {
}
