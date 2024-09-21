import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevToolsIconComponent } from './dev-tools-icon.component';

describe('DevToolsIconComponent', () => {
  let component: DevToolsIconComponent;
  let fixture: ComponentFixture<DevToolsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevToolsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevToolsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
