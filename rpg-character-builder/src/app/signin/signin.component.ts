import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Make sure this path is correct!

@Component({
  selector: 'app-signin',
  template: `
    <div style="text-align: center; padding: 20px;">
      <h2>Sign In</h2>
      <p>Enter your credentials to sign in.</p>

      <form [formGroup]="signinForm" (ngSubmit)="onSubmit()">
        <input
          type="email"
          formControlName="email"
          placeholder="Email"
          style="margin: 5px; padding: 10px;">
        <div *ngIf="signinForm.get('email')?.invalid && signinForm.get('email')?.touched">
          <small style="color: red;">Please enter a valid email.</small>
        </div>

        <input
          type="password"
          formControlName="password"
          placeholder="Password"
          style="margin: 5px; padding: 10px;">
        <div *ngIf="signinForm.get('password')?.invalid && signinForm.get('password')?.touched">
          <small style="color: red;">Password must be at least 8 characters, include a letter and number.</small>
        </div>

        <button
          type="submit"
          [disabled]="signinForm.invalid"
          style="padding: 10px;">Sign In</button>
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
export class SigninComponent {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$') // e.g. Password1
      ]]
    });
  }

  onSubmit() {
    if (this.signinForm.invalid) return;

    const { email, password } = this.signinForm.value;

    if (this.authService.signin(email, password)) {
      alert('Successfully signed in!');
      // Optionally route to another page
    } else {
      alert('Authentication failed. Please check your email and password.');
    }
  }
}
