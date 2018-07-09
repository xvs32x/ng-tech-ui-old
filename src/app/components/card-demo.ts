import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-demo',
  template: `
    <div [fxLayout]="'row wrap'">
      <app-tech-card
        *ngFor="let card of cards; let i = index"
        [fxFlex.xs]="'100%'"
        [fxFlex.sm]="'calc(50%-2em)'"
        [fxFlex.md]="'calc(33%-2em)'"
        [fxFlex.lg]="'calc(25%-2em)'"
        style="margin: 1em;"
      >
        <app-tech-card-header>
          <h4>{{card.header}} {{i + 1}}</h4>
        </app-tech-card-header>
        <app-tech-card-body>
          {{card.text}}
        </app-tech-card-body>
        <app-tech-card-footer>
          <button appTechButtonPrimary>Primary action</button>
          <button appTechButton style="margin-left: .5em;">Cancel</button>
        </app-tech-card-footer>
      </app-tech-card>
    </div>`
})
export class CardDemoComponent implements OnInit {
  card = {
    header: 'Title',
    text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    `,
  };
  cards = [this.card, this.card, this.card, this.card, this.card, this.card];

  constructor() {
  }

  ngOnInit() {
  }
}
