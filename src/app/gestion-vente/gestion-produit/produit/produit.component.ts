import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/services/produit.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  private user: Produit = {

    nom_court:'',
    nom_produit:'',
    prixBase:0,
    prixVente:0 ,
    seuil_max_remise:0,
    unite_produit:'',
    img_produit:'',
    quantite_actuel:0,
    quantite_initiale:0,
};
users :Produit[] = [];

constructor(private service:ProduitService,
  public dialogRef: MatDialogRef<ProduitComponent>,
  private router:Router) { }


ngOnInit() {
  this.service.findAll();
}

add(){
  this.service.add(this.user)
  .subscribe((user)=>{
    this.users = [user, ...this.users];
  });
}


update(){
  this.service.update(this.user).subscribe(()=>this.router.navigateByUrl("produit"));
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
     this.user = this.service.form.value;
     if(this.service.form.value.id==null){
       console.log(this.user);
       this.add();
       this.service.form.reset();

     } else {
       console.log(this.user);
       this.update();
       this.service.form.reset(); 
       this.router.navigateByUrl('produit');
       this.onNoClick();
     }
     this.service.initializeFormGroup();
   }
   this. onNoClick();

 }

}
