import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonHeroIconComponent } from './person-hero-icon.component';

describe('PersonHeroIconComponent', () => {
  let component: PersonHeroIconComponent;
  let fixture: ComponentFixture<PersonHeroIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonHeroIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonHeroIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
