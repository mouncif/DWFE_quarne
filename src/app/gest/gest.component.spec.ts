import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestComponent } from './gest.component';

describe('GestComponent', () => {
  let component: GestComponent;
  let fixture: ComponentFixture<GestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
