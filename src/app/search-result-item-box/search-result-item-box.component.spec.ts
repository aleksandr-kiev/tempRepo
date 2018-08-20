import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultItemBoxComponent } from './search-result-item-box.component';

describe('SearchResultItemBoxComponent', () => {
  let component: SearchResultItemBoxComponent;
  let fixture: ComponentFixture<SearchResultItemBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultItemBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
