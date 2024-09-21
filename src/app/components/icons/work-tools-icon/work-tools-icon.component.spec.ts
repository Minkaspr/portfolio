import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkToolsIconComponent } from './work-tools-icon.component';

describe('WorkToolsIconComponent', () => {
  let component: WorkToolsIconComponent;
  let fixture: ComponentFixture<WorkToolsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkToolsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkToolsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
