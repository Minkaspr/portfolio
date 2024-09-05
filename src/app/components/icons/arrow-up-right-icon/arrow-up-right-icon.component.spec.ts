import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowUpRightIconComponent } from './arrow-up-right-icon.component';

describe('ArrowUpRightIconComponent', () => {
  let component: ArrowUpRightIconComponent;
  let fixture: ComponentFixture<ArrowUpRightIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowUpRightIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowUpRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
