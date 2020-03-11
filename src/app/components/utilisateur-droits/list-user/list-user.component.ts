import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-User',
  templateUrl: './list-User.component.html',
  styleUrls: ['./list-User.component.css']
})
export class ListUserComponent implements OnInit {


  openDialog(): void {
    const dialogRef = this.dialog.open(UserComponent, {
    width: '500px'
  });
  
  dialogRef.afterClosed().subscribe(result => {
    this.fetchElements();
  
    });
  
  }
  
  /////////////
  
    dataSource = new MatTableDataSource<User>();
    displayedColumns: string[] = [ 'photo', 'profile', 'statut', 'email', 
     'username', 'actions'];
    
  
    constructor(private service: UserService, private rout: Router, 
      public dialog: MatDialog, public notification: MatSnackBar,
      private changeDetectorRefs: ChangeDetectorRef
     ) { }
  
    ngOnInit() {
      this.fetchElements();
    }
  


    fetchElements() {
      this.service.findAll().subscribe(res => {
        if (!res) { return; }
        console.log(res);
        this.dataSource = new MatTableDataSource(res as any);
        this.changeDetectorRefs.detectChanges();

      });
    }
  
  
    fetch(){
    this.service.findAll().subscribe(res=>{
    if (!res) {return;}
    console.log(res)
    this.dataSource=new MatTableDataSource(res as any);
    
    });
    
    }

    refresh():void{
      this.fetchElements();
    }
  
  openDialogg(): void {
    const dialogRef = this.dialog.open(UserComponent, {
    width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.form.reset();
    this.fetch();
    });

  }
  
  
  onEdit(row){
    this.service.populateform(row);
    this.openDialog();
  }
    
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    
  onDelete(id){
    if(confirm('Êtes-vous sûr de supprimer ce client?')){
    this.Delete(id);
    }
  }
    
  Delete(id){
      this.service.delete(id).subscribe(()=>{
      this.notification.open('Client supprimé ...','Fermer', {
        duration: 4000,
      });
      this.fetch();
      });
  }
}