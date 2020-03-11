import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVenteComponent } from './gestion-vente.component';

describe('GestionVenteComponent', () => {
  let component: GestionVenteComponent;
  let fixture: ComponentFixture<GestionVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
