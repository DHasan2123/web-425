import { Component } from '@angular/core';

@Component({
  selector: 'app-create-character',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Create Character</h2>
      <p>Fill in the details to create your character.</p>
      <form #characterForm="ngForm" (ngSubmit)="onSubmit()">
        <input
          type="text"
          name="name"
          [(ngModel)]="character.name"
          placeholder="Character Name"
          required
        />

        <select name="gender" [(ngModel)]="character.gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <select name="class" [(ngModel)]="character.class" required>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>

        <!-- Additional Fields -->
        <input
          type="text"
          name="faction"
          [(ngModel)]="character.faction"
          placeholder="Faction"
        />
        <input
          type="text"
          name="startingLocation"
          [(ngModel)]="character.startingLocation"
          placeholder="Starting Location"
        />
        <input
          type="text"
          name="funFact"
          [(ngModel)]="character.funFact"
          placeholder="Fun Fact"
        />

        <button type="submit">Create Character</button>
      </form>

      <!-- Display Created Characters -->
      <h3>Created Characters:</h3>
      <app-character-list [characters]="characters"></app-character-list>
    </div>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
      }

      input,
      select,
      button {
        width: 250px;
        margin: 5px;
        padding: 10px;
      }

      button {
        background-color: teal;
        color: white;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background-color: darkcyan;
      }
    `,
  ],
})
export class CreateCharacterComponent {
  character = {
    name: '',
    gender: 'Male',
    class: 'Warrior',
    faction: '',
    startingLocation: '',
    funFact: ''
  };

  characters: any[] = [];

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  onSubmit(): void {
    const newCharacter = {
      ...this.character,
      id: this.generateRandomId()
    };

    this.characters.push(newCharacter);
    this.resetForm();
  }

  resetForm(): void {
    this.character = {
      name: '',
      gender: 'Male',
      class: 'Warrior',
      faction: '',
      startingLocation: '',
      funFact: ''
    };
  }
}
