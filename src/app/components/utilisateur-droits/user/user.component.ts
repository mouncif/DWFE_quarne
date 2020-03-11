import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User = {

    id:null,
    profile:'',
    statut:'',
    photo:'',
    email:'',
    username:'',
    password:'',
};
users :User[] = [];


constructor(private service:UserService,
  public dialogRef: MatDialogRef<UserComponent>,
  private router:Router) { }


ngOnInit() {
  this.service.findAll();
}

add(){
  if (this.user.photo=='')
    this.user.photo="assets/avatar.png";
  this.service.add(this.user)
  .subscribe((user)=>{
    this.users = [user, ...this.users];
  });
}

update(){
  this.service.update(this.user).subscribe();
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
    }
   }
   this.service.form.reset();
   this. onNoClick();
   this.router.navigateByUrl('/user');
   
 }

}
