import { Component } from '@angular/core';

@Component({
  selector: 'app-create-character',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Create Character</h2>
      <p>Fill in the details to create your character.</p>
      <form>
        <input type="text" placeholder="Character Name" style="margin: 5px; padding: 10px;">
        <input type="text" placeholder="Character Class" style="margin: 5px; padding: 10px;">
        <button type="submit" style="padding: 10px;">Create Character</button>
      </form>
    </div>
  `,
  styles: [`
    h2 {
      color: purple;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    input {
      width: 250px;
      margin: 10px 0;
    }
    button {
      background-color: teal;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
    button:hover {
      background-color: darkcyan;
    }
  `]
})
export class CreateCharacterComponent {}
