import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionVenteComponent } from './components/gestion-vente/gestion-vente.component';
import { GestionProduitComponent } from './components/gestion-vente/gestion-produit/gestion-produit.component';
import { ProduitComponent } from './components/gestion-vente/gestion-produit/produit/produit.component';
import { ListComponent } from './components/gestion-vente/gestion-produit/list/list.component';
import { GestionFournisseurComponent } from './components/gestion-vente/gestion-fournisseur/gestion-fournisseur.component';
import { FournisseurComponent } from './components/gestion-vente/gestion-fournisseur/fournisseur/fournisseur.component';
import { ListFournnisComponent } from './components/gestion-vente/gestion-fournisseur/list-fournnis/list-fournnis.component';
import { GestionClientComponent } from './components/gestion-vente/gestion-client/gestion-client.component';
import { ClientComponent } from './components/gestion-vente/gestion-client/client/client.component';
import { ListClientComponent } from './components/gestion-vente/gestion-client/list-client/list-client.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarComponent } from './components/main-layout/sidebar/sidebar.component';
import { TopbarComponent } from './components/main-layout/topbar/topbar.component';
import { UtilisateurDroitsComponent } from './components/utilisateur-droits/utilisateur-droits.component';
import { ListUserComponent } from './components/utilisateur-droits/list-user/list-user.component';
import { UserComponent } from './components/utilisateur-droits/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionVenteComponent,
    GestionProduitComponent,
    ProduitComponent,
    ListComponent,
    GestionFournisseurComponent,
    FournisseurComponent,
    ListFournnisComponent,
    GestionClientComponent,
    ClientComponent,
    ListClientComponent,
    MainLayoutComponent,
    SidebarComponent,
    TopbarComponent,
    UtilisateurDroitsComponent,
    ListUserComponent,UserComponent
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
  entryComponents: [ProduitComponent,FournisseurComponent,ClientComponent,UserComponent],

})
export class AppModule { }
