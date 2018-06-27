import { NgModule } from '@angular/core';
import { InputTextComponent } from './components/input-text.component';
import { InputLabelComponent } from './components/input-label.component';

@NgModule({
  imports: [],
  exports: [
    InputTextComponent,
    InputLabelComponent
  ],
  declarations: [
    InputTextComponent,
    InputLabelComponent
  ],
  providers: [],
})
export class FormModule {
}
