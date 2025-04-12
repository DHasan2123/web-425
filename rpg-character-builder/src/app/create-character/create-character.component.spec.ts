import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCharacterComponent ],
      imports: [ FormsModule ]  // Import FormsModule to support ngModel
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test 1: Should generate a random character ID between 1 and 1000 with no decimal places
  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    const randomId = component.generateRandomId();
    expect(randomId).toBeGreaterThanOrEqual(1);
    expect(randomId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(randomId)).toBe(true);
  });

  // Test 2: Should add a character with the correct customization
  it('should add a character with correct customization', () => {
    component.character = {
      name: 'Test Character',
      gender: 'Male',
      class: 'Mage',
      faction: 'Test Faction',
      startingLocation: 'Test Location',
      funFact: 'Test Fun Fact'
    };

    // Call the onSubmit method, which should add the character
    component.onSubmit();

    // Check if the character is added
    expect(component.characters.length).toBe(1);
    const addedCharacter = component.characters[0];
    expect(addedCharacter.name).toBe('Test Character');
    expect(addedCharacter.gender).toBe('Male');
    expect(addedCharacter.class).toBe('Mage');
    expect(addedCharacter.faction).toBe('Test Faction');
    expect(addedCharacter.startingLocation).toBe('Test Location');
    expect(addedCharacter.funFact).toBe('Test Fun Fact');
    expect(addedCharacter.id).toBeGreaterThanOrEqual(1);
    expect(addedCharacter.id).toBeLessThanOrEqual(1000);
  });

  // Test 3: Should reset all form fields to their default values after resetForm is called
  it('should reset all form fields to their default values after resetForm is called', () => {
    // Set the character fields to some values
    component.character = {
      name: 'Test Character',
      gender: 'Female',
      class: 'Warrior',
      faction: 'Test Faction',
      startingLocation: 'Test Location',
      funFact: 'Test Fun Fact'
    };

    // Call resetForm
    component.resetForm();

    // Check that the fields are reset to default values
    expect(component.character.name).toBe('');
    expect(component.character.gender).toBe('Male'); // default value
    expect(component.character.class).toBe('Warrior'); // default value
    expect(component.character.faction).toBe('');
    expect(component.character.startingLocation).toBe('');
    expect(component.character.funFact).toBe('');
  });

});
