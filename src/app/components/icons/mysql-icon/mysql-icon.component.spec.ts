import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlIconComponent } from './mysql-icon.component';

describe('MysqlIconComponent', () => {
  let component: MysqlIconComponent;
  let fixture: ComponentFixture<MysqlIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysqlIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysqlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
