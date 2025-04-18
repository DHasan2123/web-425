import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { AuthGuard } from './auth/auth.guard';  // Import the AuthGuard
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'signin', component: SigninComponent },  // Route for the Sign In component
  { path: 'create-character', component: CreateCharacterComponent, canActivate: [AuthGuard] },  // Protect the CreateCharacter route with AuthGuard
  { path: 'create-guild', component: CreateGuildComponent },
  { path: 'character-faction', component: CharacterFactionComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' }  // Default route to players
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configures routing in the app
  exports: [RouterModule]  // Exports RouterModule so it's available across the app
})
export class AppRoutingModule {}
