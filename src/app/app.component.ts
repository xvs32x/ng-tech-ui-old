import { Component } from '@angular/core';

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
          <div class="row">
            <div class="col" style="width: 50%; text-align: right;"><app-tech-input-label>Text input:</app-tech-input-label></div>
            <div class="col" style="width: 50%"><app-tech-input-text></app-tech-input-text></div>
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
}
