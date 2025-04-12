import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the root component
import { CreateCharacterComponent } from './create-character/create-character.component'; // Import CreateCharacter component
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { AppRoutingModule } from './app-routing.module'; // Import routing module (if you have it)

@NgModule({
  declarations: [
    AppComponent,               // Root component
    CreateCharacterComponent    // Declare the CreateCharacter component
  ],
  imports: [
    BrowserModule,              // Required for every Angular app
    RouterModule,               // Import RouterModule to handle routing
    AppRoutingModule            // Your AppRoutingModule which contains routes
  ],
  providers: [],
  bootstrap: [AppComponent]     // Set AppComponent as the bootstrap component
})
export class AppModule { }
