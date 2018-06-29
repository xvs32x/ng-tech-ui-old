import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardModule } from './modules/card/card.module';
import { ButtonModule } from './modules/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormModule } from './modules/form/form.module';
import { CardDemoComponent } from './components/card-demo';
import { FormDemoComponent } from './components/form-demo';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CardDemoComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FontAwesomeModule,
    CardModule,
    ButtonModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
