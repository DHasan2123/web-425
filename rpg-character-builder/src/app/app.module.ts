import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the root component
import { CreateCharacterComponent } from './create-character/create-character.component'; // Import CreateCharacter component
import { PlayersComponent } from './players/players.component'; // Import PlayersComponent
import { SigninComponent } from './signin/signin.component'; // Import SigninComponent
import { CreateGuildComponent } from './create-guild/create-guild.component'; // Import CreateGuildComponent
import { CharacterFactionComponent } from './character-faction/character-faction.component'; // Import CharacterFactionComponent
import { AppRoutingModule } from './app-routing.module'; // Import routing module for handling routes

@NgModule({
  declarations: [
    AppComponent,                // Declare the root AppComponent
    CreateCharacterComponent,    // Declare CreateCharacterComponent
    PlayersComponent,            // Declare PlayersComponent
    SigninComponent,             // Declare SigninComponent
    CreateGuildComponent,        // Declare CreateGuildComponent
    CharacterFactionComponent    // Declare CharacterFactionComponent
  ],
  imports: [
    BrowserModule,               // Required for every Angular app
    AppRoutingModule             // Import the routing module for handling routing logic
  ],
  providers: [],
  bootstrap: [AppComponent]      // Set AppComponent as the bootstrap component
})
export class AppModule { }
