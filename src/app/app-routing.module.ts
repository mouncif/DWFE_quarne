

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProduitComponent } from './gestion-vente/gestion-produit/gestion-produit.component';
import { ProduitComponent } from './gestion-vente/gestion-produit/produit/produit.component';
import { ListComponent } from './gestion-vente/gestion-produit/list/list.component';
import { ListFournnisComponent } from './gestion-vente/gestion-fournisseur/list-fournnis/list-fournnis.component';


const routes: Routes = [
  {path:'', redirectTo:'produit', pathMatch:'full'},
  {path:'produit', component:ListComponent},
  {path:'listFr', component:ListFournnisComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
