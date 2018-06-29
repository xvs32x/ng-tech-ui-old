import { NgModule } from '@angular/core';
import { InputTextComponent } from './components/input-text.component';
import { InputLabelComponent } from './components/input-label.component';
import { InputSwitchComponent } from './components/input-switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports: [
    InputTextComponent,
    InputLabelComponent,
    InputSwitchComponent
  ],
  declarations: [
    InputTextComponent,
    InputLabelComponent,
    InputSwitchComponent
  ],
  providers: [],
})
export class FormModule {
}
