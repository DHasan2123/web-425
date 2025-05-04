import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guild-list',
  template: `
    <div *ngIf="guilds.length > 0; else noGuilds" class="guild-list">
      <h3>Created Guilds</h3>
      <ul>
        <li *ngFor="let guild of guilds">
          <strong>{{ guild.guildName }}</strong> - {{ guild.type }}<br />
          {{ guild.description }}<br />
          Notify via: {{ guild.notificationPreference }}
        </li>
      </ul>
    </div>
    <ng-template #noGuilds>
      <p>No guilds created yet.</p>
    </ng-template>
  `,
  styles: [`
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
export class GuildListComponent {
  @Input() guilds: any[] = [];
}
