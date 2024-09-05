import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiIconComponent } from './rest-api-icon.component';

describe('RestApiIconComponent', () => {
  let component: RestApiIconComponent;
  let fixture: ComponentFixture<RestApiIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestApiIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestApiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
