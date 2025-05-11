import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-faction',
  template: `
    <div class="characterFactions">
      <h2>Character Factions</h2>
      <p>Assign your character to a faction.</p>

      <div *ngIf="errorMessage" class="error">{{ errorMessage }}</div>

      <form *ngIf="factions.length > 0">
        <input type="text" placeholder="Character Name" [(ngModel)]="characterName" name="name">

        <select [(ngModel)]="selectedFaction" name="faction">
          <option *ngFor="let faction of factions" [value]="faction.name">
            {{ faction.name }}
          </option>
        </select>

        <button type="submit" (click)="assignFaction()">Assign Faction</button>
      </form>

      <div *ngIf="assignedFaction" class="success">
        {{ characterName }} assigned to {{ assignedFaction }}!
      </div>
    </div>
  `,
  styles: [`
    .characterFactions {
      text-align: center;
      padding: 20px;
      background-color: #f0f4f7;
    }
    h2 {
      color: darkred;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    input, select {
      width: 250px;
      margin: 10px 0;
      padding: 10px;
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
    .error {
      color: red;
      font-weight: bold;
    }
    .success {
      margin-top: 15px;
      color: green;
      font-weight: bold;
    }
  `]
})
export class CharacterFactionComponent implements OnInit {
  factions: any[] = [];
  errorMessage: string = '';
  characterName: string = '';
  selectedFaction: string = '';
  assignedFaction: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/characterfactions').subscribe({
      next: (data) => this.factions = data,
      error: () => this.errorMessage = 'Error loading character factions.'
    });
  }

  assignFaction(): void {
    if (this.characterName && this.selectedFaction) {
      this.assignedFaction = this.selectedFaction;
    }
  }
}
