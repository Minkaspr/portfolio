import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidIconComponent } from './android-icon.component';

describe('AndroidIconComponent', () => {
  let component: AndroidIconComponent;
  let fixture: ComponentFixture<AndroidIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
