import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:3000/produits"

  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_court: new FormControl('',Validators.required),
    nom_produit: new FormControl('',Validators.required),
    prixBase: new FormControl(0,Validators.required),
    prixVente: new FormControl(0,Validators.required),
    seuil_max_remise: new FormControl('',Validators.required),
    unite_produit: new FormControl('',Validators.required),
    img_produit: new FormControl('',Validators.required),
    quantite_initiale: new FormControl(0,Validators.required),
    quantite_actuel: new FormControl(0,Validators.required)});

  initializeFormGroup(){
    this.form.setValue({
      id:null,
      nom_court:'',
      nom_produit:'',
      prixBase:'',
      prixVente:'',
      seuil_max_remise:'',
      unite_produit:'',
      img_produit:'',
      quantite_actuel:'',
      quantite_initiale:'',
    });
  }
  findAll(){
    return this.http.get<Produit[]>(this.url);
  }
  add(user){
    return this.http.post<Produit>(this.url, user);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  update(user){
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  populateform(row){
    this.form.setValue(row);
  }

}
