import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypingIconComponent } from './prototyping-icon.component';

describe('PrototypingIconComponent', () => {
  let component: PrototypingIconComponent;
  let fixture: ComponentFixture<PrototypingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypingIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
