

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProduitComponent } from './gestion-vente/gestion-produit/gestion-produit.component';
import { ProduitComponent } from './gestion-vente/gestion-produit/produit/produit.component';
import { ListComponent } from './gestion-vente/gestion-produit/list/list.component';
import { ListFournnisComponent } from './gestion-vente/gestion-fournisseur/list-fournnis/list-fournnis.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'produit', component:GestionProduitComponent},
  {path:'addProduit', component:ProduitComponent},
  {path:'fr', component:GestionProduitComponent},
  {path:'listFr', component:ListFournnisComponent},
  {path:'produit/ListProduit', component:ListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
