import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresqlIconComponent } from './postgresql-icon.component';

describe('PostgresqlIconComponent', () => {
  let component: PostgresqlIconComponent;
  let fixture: ComponentFixture<PostgresqlIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostgresqlIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostgresqlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
