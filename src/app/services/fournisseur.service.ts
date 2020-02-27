import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../model/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:3000/produits"


  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_court: new FormControl('',Validators.required),
    nom: new FormControl('',Validators.required),
    ville: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required),
    telMobile: new FormControl('',Validators.required),
    telFix: new FormControl('',Validators.required),
    Fax: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      id:null,
      nom_court:'',
      nom:'',
      ville:'',
      telMobile:'',
      adresse:'',
      telFix:'',
      Fax:'',
      email :'',
    });
  }
  findAll(){
    return this.http.get<Fournisseur[]>(this.url);
  }
  add(user){
    return this.http.post<Fournisseur>(this.url, user);
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