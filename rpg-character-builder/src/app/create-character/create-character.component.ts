import { Component } from '@angular/core';

@Component({
  selector: 'app-create-character',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Create Character</h2>
      <p>Fill in the details to create your character.</p>
      <form #characterForm="ngForm" (ngSubmit)="onSubmit()">
        <!-- Character Name -->
        <input type="text" name="name" [(ngModel)]="character.name" placeholder="Character Name" required style="margin: 5px; padding: 10px;">

        <!-- Gender Select -->
        <select name="gender" [(ngModel)]="character.gender" required style="margin: 5px; padding: 10px;">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <!-- Class Select -->
        <select name="class" [(ngModel)]="character.class" required style="margin: 5px; padding: 10px;">
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>

        <!-- Submit Button -->
        <button type="submit" style="padding: 10px;">Create Character</button>
      </form>

      <!-- Display Created Characters -->
      <h3>Created Characters:</h3>
      <div *ngFor="let character of characters" class="character-card" [attr.data-testid]="'character-' + character.name">
        <h3>{{ character.name }}</h3>
        <p><strong>Gender:</strong> {{ character.gender }}</p>
        <p><strong>Class:</strong> {{ character.class }}</p>
        <p><strong>Faction:</strong> {{ character.faction }}</p>
        <p><strong>Starting Location:</strong> {{ character.startingLocation }}</p>
        <p><strong>Fun Fact:</strong> {{ character.funFact }}</p>
        <p><strong>ID:</strong> {{ character.id }}</p> <!-- Display Random ID -->
      </div>
    </div>
  `,
  styles: [
    `
      .character-card {
        border: 1px solid #ccc;
        padding: 15px;
        width: 200px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background-color: #f9f9f9;
        margin: 10px;
        text-align: left;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
      }

      input, select, button {
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
    `
  ]
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

  characters = [];

  // Generate random character ID between 1 and 1000
  generateRandomId(): number {
    return Math.floor(Math.random() * 1000) + 1; // Random ID between 1 and 1000
  }

  // Handle form submission
  onSubmit() {
    const newCharacter = {
      ...this.character,
      id: this.generateRandomId()  // Generate and assign a random ID
    };

    this.characters.push(newCharacter); // Add new character to array
    this.resetForm(); // Reset form after submitting
  }

  // Reset the form fields
  resetForm() {
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
