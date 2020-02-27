import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionVenteComponent } from './gestion-vente/gestion-vente.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionProduitComponent } from './gestion-vente/gestion-produit/gestion-produit.component';
import { ProduitComponent } from './gestion-vente/gestion-produit/produit/produit.component';
import { ListComponent } from './gestion-vente/gestion-produit/list/list.component';
import { GestionFournisseurComponent } from './gestion-vente/gestion-fournisseur/gestion-fournisseur.component';
import { FournisseurComponent } from './gestion-vente/gestion-fournisseur/fournisseur/fournisseur.component';
import { GestComponent } from './gest/gest.component';
import { ListFournnisComponent } from './gestion-vente/gestion-fournisseur/list-fournnis/list-fournnis.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionVenteComponent,
    GestionProduitComponent,
    ProduitComponent,
    ListComponent,
    GestionFournisseurComponent,
    FournisseurComponent,
    GestComponent,
    ListFournnisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProduitComponent,FournisseurComponent],

})
export class AppModule { }
