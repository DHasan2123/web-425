import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
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
            <!-- Updated Navigation Links with Create Character link -->
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/signin">Sign In</a></li>
            <li><a routerLink="/create-character">Create Character</a></li> <!-- Link to Create Character -->
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/character-faction">Character Faction</a></li>
          </ul>
        </nav>

        <!-- Content Section for Players -->
        <section class="content">
          <h2>Players</h2>
          <p>Here are the list of players in the game:</p>

          <!-- Display characters in rows of 3 per row using CSS grid -->
          <div class="characters-list">
            <div *ngFor="let character of characters" class="character-card" [attr.data-testid]="'character-' + character.name">
              <h3>{{ character.name }}</h3>
              <p><strong>Gender:</strong> {{ character.gender }}</p>
              <p><strong>Class:</strong> {{ character.class }}</p>
              <p><strong>Faction:</strong> {{ character.faction }}</p>
              <p><strong>Starting Location:</strong> {{ character.startingLocation }}</p>
              <p><strong>Fun Fact:</strong> {{ character.funFact }}</p>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer Section -->
      <footer class="footer">
        <nav class="footer-nav">
          <!-- Footer Links with Create Character link -->
          <a routerLink="/players">Players</a> |
          <a routerLink="/signin">Sign In</a> |
          <a routerLink="/create-character">Create Character</a> | <!-- Footer Link to Create Character -->
          <a routerLink="/create-guild">Create Guild</a> |
          <a routerLink="/character-faction">Character Faction</a>
        </nav>
        <p>&copy; 2025 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [
    `
      /* Import Google Fonts */
      @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@400;700&family=Montserrat:wght@700&display=swap');

      /* Reset margin, padding, and borders */
      body, header, nav, main, section, footer, img, figure, figcaption, div, ul {
        margin: 0;
        padding: 0;
        border: 0;
      }

      body {
        height: 100%;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0 auto;
        width: 75%;
        background-color: #FFFFFF;
        color: #000000;
      }

      /* Banner Section */
      .banner {
        background-color: #000000;
        color: #FFFFFF;
        text-align: center;
        padding: 20px;
      }

      .banner-img {
        max-width: 100%;
        height: auto;
      }

      /* Main Content Section */
      .main-content {
        display: flex;
        flex: 1;
      }

      .navbar {
        flex: 0 0 200px;
        padding: 20px;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
      }

      .navbar ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .navbar li {
        padding: 8px;
        transition: background-color 0.3s ease, color 0.3s ease;
        font-family: 'Lato', sans-serif;
      }

      .navbar li:hover {
        background-color: #F2F2F2;
        color: #0056B3;
        cursor: pointer;
      }

      .navbar a {
        text-decoration: none;
