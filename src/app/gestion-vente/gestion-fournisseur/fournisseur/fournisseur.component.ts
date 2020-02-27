import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  private user: Fournisseur = {

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
users :Fournisseur[] = [];

constructor(private service:FournisseurService,
  public dialogRef: MatDialogRef<FournisseurComponent>,
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
  this.service.update(this.user).subscribe(()=>this.router.navigateByUrl("/listFr"));
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
       this.router.navigateByUrl('/listFr');


     } else {
       console.log(this.user);
       this.update();
       this.service.form.reset(); 
       this.router.navigateByUrl('/listFr');
       this.onNoClick();
     }
     this.service.initializeFormGroup();
   }
 }

}
