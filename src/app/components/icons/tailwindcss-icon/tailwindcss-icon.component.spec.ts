import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindcssIconComponent } from './tailwindcss-icon.component';

describe('TailwindcssIconComponent', () => {
  let component: TailwindcssIconComponent;
  let fixture: ComponentFixture<TailwindcssIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindcssIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindcssIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
