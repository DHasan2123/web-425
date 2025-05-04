import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  // Test 1: Characters in the newly created component should display correctly
  it('should display the correct number of characters', () => {
    // Simulate adding two characters to the list
    component.characters = [
      { name: 'Warrior1', gender: 'Male', class: 'Warrior', faction: 'Alliance', startingLocation: 'Stormwind', funFact: 'Brave', id: 1 },
      { name: 'Mage1', gender: 'Female', class: 'Mage', faction: 'Horde', startingLocation: 'Orgrimmar', funFact: 'Clever', id: 2 }
    ];
    fixture.detectChanges();

    // Check that two character cards are displayed
    const characterCards = fixture.debugElement.queryAll(By.css('.character-card'));
    expect(characterCards.length).toBe(2);
  });

  // Test 2: Should display a message when there are no characters
  it('should display a message when there are no characters', () => {
    // Simulate an empty character list
    component.characters = [];
    fixture.detectChanges();

    // Check if the message is displayed
    const message = fixture.nativeElement.querySelector('p');
    expect(message.textContent).toContain('No characters created yet');
  });

  // Test 3: Should display character data correctly when populated
  it('should display the character details correctly', () => {
    // Simulate adding a character to the list
    const character = { name: 'Warrior1', gender: 'Male', class: 'Warrior', faction: 'Alliance', startingLocation: 'Stormwind', funFact: 'Brave', id: 1 };
    component.characters = [character];
    fixture.detectChanges();

    // Check that the character details are displayed
    const characterCard = fixture.debugElement.query(By.css('.character-card'));
    expect(characterCard.nativeElement.querySelector('h3').textContent).toBe('Warrior1');
    expect(characterCard.nativeElement.querySelector('p').textContent).toContain('Male');
    expect(characterCard.nativeElement.querySelector('p').textContent).toContain('Warrior');
  });

  // Test 4: Should display a message for an empty character list
  it('should display a message when the character list is empty', () => {
    component.characters = [];
    fixture.detectChanges();

    const message = fixture.nativeElement.querySelector('p');
    expect(message.textContent).toContain('No characters created yet');
  });
});
