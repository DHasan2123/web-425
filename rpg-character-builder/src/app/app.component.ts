import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <!-- Banner Section -->
      <header class="banner">
        <img src="/assets/rpg-banner.png" alt="RPG Character Builder Banner" class="banner-img">
      </header>

      <!-- Main Content Section -->
      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/players">Players</a></li>
            <li *ngIf="!isAuthenticated"><a routerLink="/signin">Sign In</a></li>
            <ng-container *ngIf="isAuthenticated">
              <li><a routerLink="/create-character">Create Character</a></li>
              <li><a routerLink="/create-guild">Create Guild</a></li>
              <li><a routerLink="/character-faction">Character Faction</a></li>
            </ng-container>
          </ul>
        </nav>

        <!-- Content Section -->
        <section class="content">
          <h2>Welcome to RPG Character Builder</h2>
          <p *ngIf="!isAuthenticated">Please sign in to access the game features.</p>
          <p *ngIf="isAuthenticated">Welcome {{ userEmail }}!</p>
        </section>
      </main>

      <!-- Footer Section -->
      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/players">Players</a> |
          <a *ngIf="!isAuthenticated" routerLink="/signin">Sign In</a> |
          <ng-container *ngIf="isAuthenticated">
            <a routerLink="/create-character">Create Character</a> |
            <a routerLink="/create-guild">Create Guild</a> |
            <a routerLink="/character-faction">Character Faction</a>
          </ng-container>
        </nav>

        <div *ngIf="isAuthenticated" style="margin-top: 10px;">
          <button (click)="onSignOut()">Sign Out</button>
        </div>

        <p>&copy; 2025 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [`
    body, html {
      margin: 0;
      padding: 0;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
      background-color: #ffffff;
    }

    .banner {
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 20px;
    }

    .navbar {
      padding: 10px;
      background-color: #333;
    }

    .navbar ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .navbar li {
      margin: 0 10px;
    }

    .navbar a {
      color: white;
      text-decoration: none;
    }

    .navbar a:hover {
      text-decoration: underline;
    }

    .main-content {
      flex: 1;
      padding: 20px;
    }

    .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px;
    }

    .footer-nav {
      margin-bottom: 10px;
    }

    .footer-nav a {
      color: white;
      margin: 0 5px;
      text-decoration: none;
    }

    .footer-nav a:hover {
      text-decoration: underline;
    }

    button {
      padding: 8px 16px;
      background-color: #cc0000;
      border: none;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #a30000;
    }
  `]
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  userEmail: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(auth => {
      this.isAuthenticated = auth;
      this.userEmail = auth ? this.authService.getUserEmail() : '';
    });
  }

  onSignOut(): void {
    this.authService.signout();
    console.log('User signed out');
  }
}
