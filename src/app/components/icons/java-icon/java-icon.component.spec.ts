import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaIconComponent } from './java-icon.component';

describe('JavaIconComponent', () => {
  let component: JavaIconComponent;
  let fixture: ComponentFixture<JavaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
