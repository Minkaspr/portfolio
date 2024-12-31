import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLaptopIconComponent } from './device-laptop-icon.component';

describe('DeviceLaptopIconComponent', () => {
  let component: DeviceLaptopIconComponent;
  let fixture: ComponentFixture<DeviceLaptopIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceLaptopIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceLaptopIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
