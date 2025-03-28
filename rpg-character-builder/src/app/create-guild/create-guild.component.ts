import { Component } from '@angular/core';

@Component({
  selector: 'app-create-guild',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Create Guild</h2>
      <p>Create a guild for your characters to join.</p>
      <form>
        <input type="text" placeholder="Guild Name" style="margin: 5px; padding: 10px;">
        <input type="text" placeholder="Guild Leader" style="margin: 5px; padding: 10px;">
        <button type="submit" style="padding: 10px;">Create Guild</button>
      </form>
    </div>
  `,
  styles: [`
    h2 {
      color: orange;
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
      background-color: darkgreen;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
    button:hover {
      background-color: forestgreen;
    }
  `]
})
export class CreateGuildComponent {}
