import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBelfiusComponent } from './company-belfius.component';

describe('CompanyBelfiusComponent', () => {
  let component: CompanyBelfiusComponent;
  let fixture: ComponentFixture<CompanyBelfiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBelfiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBelfiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
