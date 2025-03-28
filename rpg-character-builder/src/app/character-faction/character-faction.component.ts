import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Character Faction</h2>
      <p>Assign your character to a faction.</p>
      <form>
        <input type="text" placeholder="Character Name" style="margin: 5px; padding: 10px;">
        <select style="margin: 5px; padding: 10px;">
          <option value="faction1">Faction 1</option>
          <option value="faction2">Faction 2</option>
          <option value="faction3">Faction 3</option>
        </select>
        <button type="submit" style="padding: 10px;">Assign Faction</button>
      </form>
    </div>
  `,
  styles: [`
    h2 {
      color: darkred;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    input, select {
      width: 250px;
      margin: 10px 0;
    }
    button {
      background-color: purple;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
    button:hover {
      background-color: indigo;
    }
  `]
})
export class CharacterFactionComponent {}
