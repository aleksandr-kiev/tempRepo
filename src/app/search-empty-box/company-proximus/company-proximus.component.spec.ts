import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProximusComponent } from './company-proximus.component';

describe('CompanyProximusComponent', () => {
  let component: CompanyProximusComponent;
  let fixture: ComponentFixture<CompanyProximusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProximusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProximusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
