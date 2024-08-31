import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDarkIconComponent } from './folder-dark-icon.component';

describe('FolderDarkIconComponent', () => {
  let component: FolderDarkIconComponent;
  let fixture: ComponentFixture<FolderDarkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderDarkIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderDarkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
