import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Sign In</h2>
      <p>Enter your credentials to sign in.</p>
      <form>
        <input type="text" placeholder="Username" style="margin: 5px; padding: 10px;">
        <input type="password" placeholder="Password" style="margin: 5px; padding: 10px;">
        <button type="submit" style="padding: 10px;">Sign In</button>
      </form>
    </div>
  `,
  styles: [`
    h2 {
      color: green;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    input {
      width: 200px;
      margin: 10px 0;
    }
    button {
      background-color: blue;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
    button:hover {
      background-color: darkblue;
    }
  `]
})
export class SigninComponent {}
