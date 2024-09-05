import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaIconComponent } from './figma-icon.component';

describe('FigmaIconComponent', () => {
  let component: FigmaIconComponent;
  let fixture: ComponentFixture<FigmaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigmaIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigmaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
