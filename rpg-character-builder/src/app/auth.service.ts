import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'; // Import ngx-cookie-service
import { Router } from '@angular/router'; // Import Router for navigation
import { User } from './user.model'; // Assuming you have a User interface defined

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Array of users with empId, email, and password
  private users: User[] = [
    { empId: 1, email: 'user1@example.com', password: 'password1' },
    { empId: 2, email: 'user2@example.com', password: 'password2' },
    { empId: 3, email: 'user3@example.com', password: 'password3' }
  ];

  // Authentication state using BehaviorSubject (default to false)
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private cookieService: CookieService, private router: Router) {}

  // Get the current authentication state as an observable
  getAuthState() {
    return this.authState.asObservable();
  }

  // Signin method to authenticate users
  signin(email: string, password: string): boolean {
    // Check if the user exists in the array with matching email and password
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      // Set the authState to true (authenticated)
      this.authState.next(true);

      // Set a cookie 'session_user' with the user information (you can adjust this for security purposes)
      this.cookieService.set('session_user', JSON.stringify(user));

      return true; // Authentication successful
    } else {
      // Set authState to false if user is not found
      this.authState.next(false);

      return false; // Authentication failed
    }
  }

  // Sign out method
  signout(): void {
    // Delete all cookies (assuming all cookies are related to the session)
    this.cookieService.deleteAll();  // Deletes all cookies

    // Set authState to false (user is signed out)
    this.authState.next(false);

    // Redirect the user to the /signin route
    this.router.navigate(['/signin']);
  }
}
