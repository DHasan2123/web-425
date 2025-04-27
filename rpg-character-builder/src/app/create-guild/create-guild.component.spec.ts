import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CreateGuildComponent]
    });

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
  });

  it('should create the form with all fields', () => {
    fixture.detectChanges();
    expect(component.guildForm.contains('guildName')).toBeTrue();
    expect(component.guildForm.contains('description')).toBeTrue();
    expect(component.guildForm.contains('type')).toBeTrue();
    expect(component.guildForm.contains('acceptTerms')).toBeTrue();
    expect(component.guildForm.contains('notificationPreference')).toBeTrue();
  });

  it('should be invalid when fields are empty', () => {
    fixture.detectChanges();
    const form = component.guildForm;
    const submitButton = fixture.debugElement.query(By.css('button'));

    expect(form.valid).toBeFalse();
    expect(submitButton.nativeElement.disabled).toBeTrue();
  });

  it('should be valid when all fields are filled correctly', () => {
    fixture.detectChanges();
    const form = component.guildForm;
    form.controls['guildName'].setValue('Warriors');
    form.controls['description'].setValue('A group of skilled warriors');
    form.controls['type'].setValue('Competitive');
    form.controls['acceptTerms'].setValue(true);
    form.controls['notificationPreference'].setValue('Email');

    const submitButton = fixture.debugElement.query(By.css('button'));
    expect(form.valid).toBeTrue();
    expect(submitButton.nativeElement.disabled).toBeFalse();
  });

  it('should prevent form submission if acceptTerms is unchecked', () => {
    fixture.detectChanges();
    const form = component.guildForm;
    form.controls['guildName'].setValue('Warriors');
    form.controls['description'].setValue('A group of skilled warriors');
    form.controls['type'].setValue('Competitive');
    form.controls['notificationPreference'].setValue('Email');
    form.controls['acceptTerms'].setValue(false); // Checkbox unchecked

    const submitButton = fixture.debugElement.query(By.css('button'));
    expect(form.invalid).toBeTrue();
    expect(submitButton.nativeElement.disabled).toBeTrue();
  });

  it('should submit the form and display created guilds', () => {
    fixture.detectChanges();
    const form = component.guildForm;
    form.controls['guildName'].setValue('Warriors');
    form.controls['description'].setValue('A group of skilled warriors');
    form.controls['type'].setValue('Competitive');
    form.controls['acceptTerms'].setValue(true);
    form.controls['notificationPreference'].setValue('Email');

    component.onSubmit();

    expect(component.createdGuilds.length).toBeGreaterThan(0);
    expect(component.createdGuilds[0].guildName).toBe('Warriors');
    expect(component.createdGuilds[0].description).toBe('A group of skilled warriors');
  });
});
