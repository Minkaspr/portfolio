import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkillSectionComponent } from './card-skill-section.component';

describe('CardSkillSectionComponent', () => {
  let component: CardSkillSectionComponent;
  let fixture: ComponentFixture<CardSkillSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSkillSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSkillSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
