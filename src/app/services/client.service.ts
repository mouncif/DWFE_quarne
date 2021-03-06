import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:3000/clients"


  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_Cl: new FormControl('',Validators.required),
    prenom_Cl: new FormControl('',Validators.required),
    statut: new FormControl('',Validators.required),
    photo: new FormControl('',),
    tel: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    adresse: new FormControl('',Validators.required),
    ville: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      id:null,
      prenom_Cl:'',
      nom:'',
      statut:'',
      tel:'',
      photo:'',
      ville:'',
      adresse:'',
      email :'',
    });
  }
  findAll(){
    return this.http.get<Client[]>(this.url);
  }
  add(user){
    return this.http.post<Client>(this.url, user);
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