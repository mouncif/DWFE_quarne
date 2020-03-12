import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../../models/produit.model';
import { ProduitService } from '../../../../services/produit.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  private prd: Produit = {

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
prds :Produit[] = [];

constructor(private service:ProduitService,
  public dialogRef: MatDialogRef<ProduitComponent>,
  private router:Router) { }


ngOnInit() {
  this.service.findAll();
}

add(){
  this.service.add(this.prd)
  .subscribe((prd)=>{
    this.prds = [prd, ...this.prds];
  });
}


update(){
  this.service.update(this.prd).subscribe();
}


onNoClick(): void {
  this.dialogRef.close();
}
onClear(){
  this.service.initializeFormGroup();
  this.service.form.reset();
}


 onSubmit(){ 
  console.log('ON SUBMIT');
  if(this.service.form.valid){
    console.log('ON VALID');
    this.prd = this.service.form.value;
    if(this.service.form.value.id==null){
      console.log('id null');
      console.log(this.prd);
      this.add();
      this.service.form.reset();

    } else {
      console.log('id not null');

      console.log(this.prd);
      this.update();
    }
   }
   this.service.form.reset();
   this. onNoClick();
   this.router.navigateByUrl('/produit');
   
 }

}
