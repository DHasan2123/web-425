import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

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
            <li *ngIf="isAuthenticated"><a routerLink="/create-character">Create Character</a></li>
            <li *ngIf="isAuthenticated"><a routerLink="/create-guild">Create Guild</a></li>
            <li *ngIf="isAuthenticated"><a routerLink="/character-faction">Character Faction</a></li>
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
          <a routerLink="/signin" *ngIf="!isAuthenticated">Sign In</a> |
          <a routerLink="/create-character" *ngIf="isAuthenticated">Create Character</a> |
          <a routerLink="/create-guild" *ngIf="isAuthenticated">Create Guild</a> |
          <a routerLink="/character-faction" *ngIf="isAuthenticated">Character Faction</a>
        </nav>

        <div *ngIf="isAuthenticated">
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

    .navbar a {
      color: white;
      margin-right: 10px;
      text-decoration: none;
    }

    .navbar a:hover {
      text-decoration: underline;
    }

    .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px;
    }

    .footer-nav a {
      color: white;
      margin: 0 5px;
      text-decoration: none;
    }

    .footer-nav a:hover {
      text-decoration: underline;
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
