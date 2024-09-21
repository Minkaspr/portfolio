import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtIconComponent } from './at-icon.component';

describe('AtIconComponent', () => {
  let component: AtIconComponent;
  let fixture: ComponentFixture<AtIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
