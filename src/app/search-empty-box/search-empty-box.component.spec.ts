import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmptyBoxComponent } from './search-empty-box.component';

describe('SearchEmptyBoxComponent', () => {
  let component: SearchEmptyBoxComponent;
  let fixture: ComponentFixture<SearchEmptyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmptyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmptyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
