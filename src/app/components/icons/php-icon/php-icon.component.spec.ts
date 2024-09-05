import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpIconComponent } from './php-icon.component';

describe('PhpIconComponent', () => {
  let component: PhpIconComponent;
  let fixture: ComponentFixture<PhpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhpIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
