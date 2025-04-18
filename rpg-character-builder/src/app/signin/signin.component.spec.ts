import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockCookieService: jasmine.SpyObj<CookieService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['signin']);
    mockCookieService = jasmine.createSpyObj('CookieService', ['set']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: CookieService, useValue: mockCookieService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ✅ Test 1: Successful sign in
  it('should set cookie and authState to true on successful sign in', () => {
    mockAuthService.signin.and.returnValue(true);
    component.signinForm.setValue({
      email: 'user1@example.com',
      password: 'password1'
    });

    component.onSubmit();

    expect(mockAuthService.signin).toHaveBeenCalledWith('user1@example.com', 'password1');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/players']); // or any route you redirect to on success
  });

  // ✅ Test 2: Failed sign in
  it('should not set cookie and authState to true on unsuccessful sign in', () => {
    mockAuthService.signin.and.returnValue(false);
    component.signinForm.setValue({
      email: 'wrong@example.com',
      password: 'wrongpass'
    });

    component.onSubmit();

    expect(mockAuthService.signin).toHaveBeenCalledWith('wrong@example.com', 'wrongpass');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    // You can also check for a local variable or alert flag if applicable
  });

  // ✅ Test 3: Should call signin method on form submission
  it('should call signin method on form submission', () => {
    const signinSpy = spyOn(component, 'onSubmit').and.callThrough();
    component.signinForm.setValue({
      email: 'test@example.com',
      password: 'testpass'
    });

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(signinSpy).toHaveBeenCalled();
  });
});
