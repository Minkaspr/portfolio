import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoneIconComponent } from './bone-icon.component';

describe('BoneIconComponent', () => {
  let component: BoneIconComponent;
  let fixture: ComponentFixture<BoneIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoneIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
