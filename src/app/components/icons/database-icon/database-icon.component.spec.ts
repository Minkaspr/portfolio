import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseIconComponent } from './database-icon.component';

describe('DatabaseIconComponent', () => {
  let component: DatabaseIconComponent;
  let fixture: ComponentFixture<DatabaseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
