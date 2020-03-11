import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private url = "http://localhost:3000/users"

  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    profile: new FormControl('',Validators.required),
    statut: new FormControl('',Validators.required),
    photo: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      id:null,
      profile:'',
      statut:'',
      photo:'',
      email:'',
      username:'',
      password:'',
    });
  }
  findAll(){
    return this.http.get<User[]>(this.url);
  }
  add(user){
    return this.http.post<User>(this.url, user);
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
