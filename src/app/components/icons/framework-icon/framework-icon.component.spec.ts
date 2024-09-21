import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkIconComponent } from './framework-icon.component';

describe('FrameworkIconComponent', () => {
  let component: FrameworkIconComponent;
  let fixture: ComponentFixture<FrameworkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworkIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
