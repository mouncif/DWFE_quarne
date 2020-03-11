import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurDroitsComponent } from './utilisateur-droits.component';

describe('UtilisateurDroitsComponent', () => {
  let component: UtilisateurDroitsComponent;
  let fixture: ComponentFixture<UtilisateurDroitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurDroitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurDroitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
