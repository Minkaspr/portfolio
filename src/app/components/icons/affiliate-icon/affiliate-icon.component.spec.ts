import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateIconComponent } from './affiliate-icon.component';

describe('AffiliateIconComponent', () => {
  let component: AffiliateIconComponent;
  let fixture: ComponentFixture<AffiliateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliateIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
