import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderLightIconComponent } from './folder-light-icon.component';

describe('FolderLightIconComponent', () => {
  let component: FolderLightIconComponent;
  let fixture: ComponentFixture<FolderLightIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderLightIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderLightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
