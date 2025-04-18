import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';  // Import AuthService
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the 'session_user' cookie is present
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/signin']); // Redirect to SignIn if not authenticated
      return false;
    }
  }
}
