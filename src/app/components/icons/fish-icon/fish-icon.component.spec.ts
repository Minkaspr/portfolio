import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishIconComponent } from './fish-icon.component';

describe('FishIconComponent', () => {
  let component: FishIconComponent;
  let fixture: ComponentFixture<FishIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
