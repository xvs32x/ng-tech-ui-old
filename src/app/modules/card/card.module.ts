import { NgModule } from '@angular/core';
import { CardComponent } from './components/card.components';
import { CardHeaderComponent } from './components/card-header.component';
import { CardBodyComponent } from './components/card-body.component';
import { CardFooterComponent } from './components/card-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ],
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ],
  providers: [],
})
export class CardModule {
}
