import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestThankComponent } from './request-thank.component';

describe('RequestThankComponent', () => {
  let component: RequestThankComponent;
  let fixture: ComponentFixture<RequestThankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestThankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestThankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
