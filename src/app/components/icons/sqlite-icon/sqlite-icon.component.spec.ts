import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqliteIconComponent } from './sqlite-icon.component';

describe('SqliteIconComponent', () => {
  let component: SqliteIconComponent;
  let fixture: ComponentFixture<SqliteIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqliteIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqliteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
