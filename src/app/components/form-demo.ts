import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  template: `
    <!--<div class="row">-->
      <!--<div class="col">-->
        <!--<h2>Forms</h2>-->
      <!--</div>-->
    <!--</div>-->
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
  `
})
export class FormDemoComponent implements OnInit {
  inputTextState = 'default';
  inputStates = [
    {name: 'Default', value: true},
    {name: 'Focused', value: false},
    {name: 'Success', value: false},
    {name: 'Error', value: false},
  ];
  constructor() {
  }

  ngOnInit() {
  }

  onInputTextStateChange(state) {
    this.inputTextState = state.name.toLowerCase();
  }
}
