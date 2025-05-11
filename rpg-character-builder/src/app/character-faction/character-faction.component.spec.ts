import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterFactionComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should handle errors when data is not found', () => {
    component.ngOnInit();
    const req = httpMock.expectOne('http://localhost:3000/api/characterfactions');
    req.flush('Error loading', { status: 404, statusText: 'Not Found' });

    expect(component.errorMessage).toBe('Error loading character factions.');
  });

  it('should correctly fetch a list of character factions', () => {
    const mockData = [{ name: 'Faction A' }, { name: 'Faction B' }];
    component.ngOnInit();
    const req = httpMock.expectOne('http://localhost:3000/api/characterfactions');
    req.flush(mockData);

    expect(component.factions.length).toBe(2);
    expect(component.factions[0].name).toBe('Faction A');
  });

  it('should update the characterFactions div when character factions are found', () => {
    const mockData = [{ name: 'Faction A' }];
    component.ngOnInit();
    const req = httpMock.expectOne('http://localhost:3000/api/characterfactions');
    req.flush(mockData);
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.css('.characterFactions'));
    expect(div.nativeElement.textContent).toContain('Faction A');
  });
});
