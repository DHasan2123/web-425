import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Players</h2>
      <p>Manage all players here.</p>
    </div>
  `,
  styles: [
    `
    h2 {
      color: blue;
    }
  `
]
})
export class PlayersComponent {}
