import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription, pipe } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { STATE_CLICKED, STATE_DEFAULT, STATE_DISABLED, STATE_INVALIDATED, STATE_VALIDATED } from '../constants/tech-state';

@Component({
  selector: 'app-form-demo',
  template: `
    <div [fxLayout]="'column'">
      <app-tech-card style="margin: 1em;">
        <app-tech-card-body>
          <!--States toggle-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div
              [fxFlex]="'calc(33%-1em)'"
              style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <app-tech-label [isCompact]="isMobile">Input states:</app-tech-label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" style="padding: .5em;" [ngStyle.gt-xs]="{margin: '0 .5em'}">
              <app-tech-radio-component *ngFor="let item of inputStates"
                                        [model]="inputTextState" [name]="item.name" (OnModelChange)="onInputTextStateChange($event)">
                {{item.label}}
              </app-tech-radio-component>
            </div>
          </div>
          <!--Text input directive-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"
                 style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <app-tech-label [isCompact]="isMobile">Input text directive:</app-tech-label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" style="padding: .5em;" [ngStyle.gt-xs]="{margin: '0 .5em'}">
              <input placeholder="Styled input directive without html template..." type="text" appTechInputText>
            </div>
          </div>
          <!--Text input component-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"
                 style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <app-tech-label [isCompact]="isMobile">Input text component:</app-tech-label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" style="padding: .5em;" [ngStyle.gt-xs]="{margin: '0 .5em'}">
              <app-tech-input-text
                [state]="inputTextState"
                [placeholder]="'Input component with validation states and errors template'"
              ></app-tech-input-text>
            </div>
          </div>
          <!--Submit form-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(66%-1em)'" [fxFlexOffset.gt-xs]="33"
                 style="padding: .5em .5em .5em 1em;" [ngStyle.gt-xs]="{margin: '0 .5em'}">
              <button appTechButtonPrimary>Submit</button>
              <button appTechButton style="margin-left: .5em;">Clear</button>
            </div>
          </div>
        </app-tech-card-body>
      </app-tech-card>
    </div>
  `
})
export class FormDemoComponent implements OnInit, OnDestroy {
  inputTextState = STATE_DEFAULT;
  inputStates = [
    {name: STATE_DEFAULT, label: 'Default'},
    {name: STATE_CLICKED, label: 'Clicked'},
    {name: STATE_VALIDATED, label: 'Validated'},
    {name: STATE_INVALIDATED, label: 'Invalidated'},
    {name: STATE_DISABLED, label: 'Disabled'},
  ];
  isMobile = false;
  private subs: Subscription[] = [];

  constructor(media: ObservableMedia) {
    const s1 = media.subscribe((change: MediaChange) => this.isMobile = change.mqAlias === 'xs');
    this.subs.push(s1);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  onInputTextStateChange(state) {
    this.inputTextState = state;
  }
}
