import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFournisseurComponent } from './gestion-fournisseur.component';

describe('GestionFournisseurComponent', () => {
  let component: GestionFournisseurComponent;
  let fixture: ComponentFixture<GestionFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
