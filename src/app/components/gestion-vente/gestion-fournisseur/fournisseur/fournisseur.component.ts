import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  private FR: Fournisseur = {

    id:null,
    nom_court:'',
    nom:'',
    ville:'',
    telMobile:'',
    adresse:'',
    telFix:'',
    Fax:'',
    email :'',
};
FRs :Fournisseur[] = [];

constructor(private service:FournisseurService,
  public dialogRef: MatDialogRef<FournisseurComponent>,
  private router:Router) { }


ngOnInit() {
}

add(){
  this.service.add(this.FR)
  .subscribe((FR)=>{
    this.FRs = [FR, ...this.FRs];
  });
}

update(){
  this.service.update(this.FR).subscribe();
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
     this.FR = this.service.form.value;
     if(this.service.form.value.id==null){
       this.service.form.reset();
       console.log(this.FR);
       this.add();
       this.service.form.reset();

     } else {
       console.log(this.FR);
       this.update();
     }
    }
    this.service.form.reset();
   this. onNoClick();
    
 }

}
