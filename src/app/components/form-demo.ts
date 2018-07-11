import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription, pipe } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

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
            <div [fxFlex]="'calc(66%-1em)'" style="margin: 0 .5em; padding: .5em;">
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
            <div [fxFlex]="'calc(66%-1em)'" style="margin: 0 .5em; padding: .5em;">
              <input placeholder="Styled input directive without html template..." type="text" appTechInputText>
            </div>
          </div>
          <!--Text input component-->
          <div [fxLayout]="'row wrap'" [fxLayout.xs]="'column'">
            <div [fxFlex]="'calc(33%-1em)'"
                 style="text-align: right;" [ngStyle.xs]="{'text-align': 'left'}">
              <app-tech-label [isCompact]="isMobile">Input text component:</app-tech-label>
            </div>
            <div [fxFlex]="'calc(66%-1em)'" style="margin: 0 .5em; padding: .5em;">
              <app-tech-input-text [placeholder]="'Input component with validation states and errors template'"></app-tech-input-text>
            </div>
          </div>
        </app-tech-card-body>
      </app-tech-card>
    </div>
  `
})
export class FormDemoComponent implements OnInit, OnDestroy {
  inputTextState = 'default';
  inputStates = [
    {name: 'default', label: 'Default'},
    {name: 'focused', label: 'Focused'},
    {name: 'validated', label: 'Validated'},
    {name: 'invalidated', label: 'Invalidated'},
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
