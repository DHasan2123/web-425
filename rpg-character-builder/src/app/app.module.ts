import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Root component
import { CreateCharacterComponent } from './create-character/create-character.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { AppRoutingModule } from './app-routing.module';

// ✅ Newly added imports
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent,
    PlayersComponent,
    SigninComponent,
    CreateGuildComponent,
    CharacterFactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,           // ✅ Enables [(ngModel)] for forms
    HttpClientModule       // ✅ Enables HttpClient for API requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
