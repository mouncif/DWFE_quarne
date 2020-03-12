import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../models/client.model';
import { ClientService } from '../../../../services/client.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private client: Client = {

    id:null,
    nom_Cl:'',
    prenom_Cl:'',
    statut:'',
    photo:'',
    tel:'',
    email:'',
    adresse:'',
    ville :'',
};
clients :Client[] = [];

constructor(private service:ClientService,
  public dialogRef: MatDialogRef<ClientComponent>,
  private router:Router) { }


ngOnInit() {
  this.service.findAll();
}

add(){
  this.service.add(this.client)
  .subscribe((client)=>{
    this.clients = [client, ...this.clients];
  });
}

update(){
  this.service.update(this.client).subscribe();
}


onNoClick(): void {
  this.dialogRef.close();
}
onClear(){
  this.service.initializeFormGroup();
  this.service.form.reset();
}


 onSubmit()
 {
   if(this.service.form.valid){
    this.client = this.service.form.value;
    if(this.service.form.value.id==null){
      console.log(this.client);
      this.add();
      this.service.form.reset();

    } else {
      console.log(this.client);
      this.update();
    }
   }
   this.service.form.reset();
   this. onNoClick();
   
 }

}
