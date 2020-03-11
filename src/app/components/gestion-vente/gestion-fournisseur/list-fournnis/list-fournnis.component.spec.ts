import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFournnisComponent } from './list-fournnis.component';

describe('ListFournnisComponent', () => {
  let component: ListFournnisComponent;
  let fixture: ComponentFixture<ListFournnisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFournnisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFournnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
