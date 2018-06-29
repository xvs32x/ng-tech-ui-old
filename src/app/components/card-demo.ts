import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-demo',
  template: `
    <!--<div class="row">-->
      <!--<div class="col">-->
        <!--<h2>Cards</h2>-->
      <!--</div>-->
    <!--</div>-->
    <div class="row">
      <app-tech-card *ngFor="let card of cards; let i = index" class="col">
        <app-tech-card-header>
          <h3>{{card.header}} {{i + 1}}</h3>
        </app-tech-card-header>
        <app-tech-card-body>
          {{card.text}}
        </app-tech-card-body>
        <app-tech-card-footer>
          <app-tech-button state="primary">Primary action</app-tech-button>
          <app-tech-button style="margin-left: 0.33em;">Cancel</app-tech-button>
        </app-tech-card-footer>
      </app-tech-card>
    </div>
  `
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
  cards = [this.card, this.card, this.card];

  constructor() {
  }

  ngOnInit() {
  }
}
