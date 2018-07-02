import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-demo',
  template: `
      <div [fxLayout]="'column'">
        <app-tech-card style="margin: 1em;">
          <app-tech-card-body>
            <!--States toggle-->
            <div [fxLayout]="'row wrap'">
              <div [fxFlex]="'calc(33%-1em)'" style="text-align: right; margin: 0 .5em; padding: .5em;">
                <app-tech-input-label>Input states:</app-tech-input-label>
              </div>
              <div [fxFlex]="'calc(66%-1em)'" style="margin: 0 .5em; padding: .5em;">
                <app-tech-input-switch
                  [values]="inputStates" (OnChange)="onInputTextStateChange($event)"
                ></app-tech-input-switch>
              </div>
            </div>
            <!--Text input-->
            <div [fxLayout]="'row wrap'">
              <div [fxFlex]="'calc(33%-1em)'" style="text-align: right; margin: 0 .5em; padding: .5em;">
                <app-tech-input-label>Text input:</app-tech-input-label>
              </div>
              <div [fxFlex]="'calc(66%-1em)'" style="margin: 0 .5em; padding: .5em;">
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
