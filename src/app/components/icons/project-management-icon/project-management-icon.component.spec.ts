import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementIconComponent } from './project-management-icon.component';

describe('ProjectManagementIconComponent', () => {
  let component: ProjectManagementIconComponent;
  let fixture: ComponentFixture<ProjectManagementIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectManagementIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
