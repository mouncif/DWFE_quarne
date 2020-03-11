import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-gestion-vente',
  templateUrl: './gestion-vente.component.html',
  styleUrls: ['./gestion-vente.component.css']
})
export class GestionVenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private title="Dossier Client";
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    if (tabChangeEvent.index==0)
      this.title="Dossier Client"
    else if (tabChangeEvent.index==1)
      this.title="Dossier Fournisseur"
    else 
      this.title="Dossier Produit"
  }
  
}
