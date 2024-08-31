import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateIconComponent } from './translate-icon.component';

describe('TranslateIconComponent', () => {
  let component: TranslateIconComponent;
  let fixture: ComponentFixture<TranslateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
