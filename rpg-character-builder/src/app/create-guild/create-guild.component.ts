import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Guild {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference: string;
}

@Component({
  selector: 'app-create-guild',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Create Guild</h2>
      <p>Create a guild for your characters to join.</p>

      <form [formGroup]="guildForm" (ngSubmit)="onSubmit()" novalidate>
        <input
          type="text"
          formControlName="guildName"
          placeholder="Guild Name"
          [ngClass]="{'invalid': isInvalid('guildName')}" />

        <textarea
          formControlName="description"
          placeholder="Guild Description"
          [ngClass]="{'invalid': isInvalid('description')}"></textarea>

        <select
          formControlName="type"
          [ngClass]="{'invalid': isInvalid('type')}">
          <option value="">Select Guild Type</option>
          <option value="Competitive">Competitive</option>
          <option value="Casual">Casual</option>
          <option value="Social">Social</option>
          <option value="Educational">Educational</option>
        </select>

        <div>
          Notification Preference:
          <label><input type="radio" value="Email" formControlName="notificationPreference" /> Email</label>
          <label><input type="radio" value="SMS" formControlName="notificationPreference" /> SMS</label>
          <label><input type="radio" value="In App" formControlName="notificationPreference" /> In App</label>
        </div>

        <label>
          <input type="checkbox" formControlName="acceptTerms" />
          I accept the terms
        </label>

        <button type="submit" [disabled]="guildForm.invalid">Create Guild</button>
      </form>

      <div *ngIf="createdGuilds.length > 0" class="guild-list">
        <h3>Created Guilds</h3>
        <ul>
          <li *ngFor="let guild of createdGuilds">
            <strong>{{ guild.guildName }}</strong> - {{ guild.type }}<br/>
            {{ guild.description }}<br/>
            Notify via: {{ guild.notificationPreference }}
          </li>
        </ul>
      </div>
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
      max-width: 400px;
      margin: auto;
      background: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    input, textarea, select {
      width: 100%;
      margin: 10px 0;
      padding: 10px;
      font-size: 1rem;
    }
    input.invalid, textarea.invalid, select.invalid {
      border: 2px solid red;
    }
    button {
      background-color: darkgreen;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      width: 100%;
    }
    button:hover {
      background-color: forestgreen;
    }
    .guild-list {
      margin-top: 30px;
      padding: 15px;
      background-color: #fff;
      border-radius: 8px;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 4px;
    }
  `]
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  createdGuilds: Guild[] = [];

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      notificationPreference: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.guildForm.valid) {
      this.createdGuilds.push(this.guildForm.value);
      this.guildForm.reset();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.guildForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
