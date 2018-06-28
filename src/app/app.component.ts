import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SwitchValueI } from './modules/form/interfaces/switch-value';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <app-tech-card *ngFor="let card of cards; let i = index" class="col">
        <app-tech-card-header>
          <h3>{{card.header}} {{i + 1}}</h3>
        </app-tech-card-header>
        <app-tech-card-body>
          {{card.text}}
        </app-tech-card-body>
        <app-tech-card-footer>
          <app-tech-button>Primary action</app-tech-button>
          <app-tech-button appTechButtonOutline style="margin-left: 0.33em;">Cancel</app-tech-button>
        </app-tech-card-footer>
      </app-tech-card>
    </div>
    <div class="row">
      <app-tech-card class="col" style="width: 100%">
        <app-tech-card-body>
          <!--States toggle-->
          <div class="row" style="max-width: 1024px;">
            <div class="col" style="width: 40%; text-align: right;">
              <app-tech-input-label>Input states:</app-tech-input-label>
            </div>
            <div class="col" style="width: 60%">
              <app-tech-input-switch [values]="inputStates" (OnChange)="onInputTextStateChange($event)"></app-tech-input-switch>
            </div>
          </div>
          <!--Text input-->
          <div class="row" style="max-width: 1024px;">
            <div class="col" style="width: 40%; text-align: right;">
              <app-tech-input-label>Text input:</app-tech-input-label>
            </div>
            <div class="col" style="width: 60%">
              <app-tech-input-text placeholder="Some placeholder..." [state]="inputTextState"></app-tech-input-text>
            </div>
          </div>
        </app-tech-card-body>
      </app-tech-card>
    </div>
  `,
  styles: []
})
export class AppComponent {
  card = {
    header: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  };
  cards = [this.card, this.card, this.card];
  inputTextState = 'default';
  inputStates = [
    {name: 'Default', value: true},
    {name: 'Focused', value: false},
    {name: 'Success', value: false},
    {name: 'Error', value: false},
  ];

  onInputTextStateChange(state) {
    this.inputTextState = state.name.toLowerCase();
  }

}
