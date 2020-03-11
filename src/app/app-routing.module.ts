import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionProduitComponent } from './components/gestion-vente/gestion-produit/gestion-produit.component';
import { GestionFournisseurComponent } from './components/gestion-vente/gestion-fournisseur/gestion-fournisseur.component';
import { GestionClientComponent } from './components/gestion-vente/gestion-client/gestion-client.component';
import { UtilisateurDroitsComponent } from './components/utilisateur-droits/utilisateur-droits.component';
import { GestionVenteComponent } from './components/gestion-vente/gestion-vente.component';


const routes: Routes = [
  {path:'', redirectTo:'vente', pathMatch:'full'},
  {path:'user', component:UtilisateurDroitsComponent},
  {path:'vente', component:GestionVenteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
