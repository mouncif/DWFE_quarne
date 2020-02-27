import { Component, OnInit } from '@angular/core';
import { FournisseurComponent } from '../fournisseur/fournisseur.component';
import { Fournisseur } from 'src/app/model/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-fournnis',
  templateUrl: './list-fournnis.component.html',
  styleUrls: ['./list-fournnis.component.css']
})
export class ListFournnisComponent implements OnInit {

  openDialog(): void {
    const dialogRef = this.dialog.open(FournisseurComponent, {
    width: '500px'
  });
  
  dialogRef.afterClosed().subscribe(result => {
    this.fetchElements();
  
    });
  
  }
  
  /////////////
  
    dataSource = new MatTableDataSource<Fournisseur>();
    displayedColumns: string[] = ['id', 'nom_court', 'nom', 'ville', 'adresse', 
     'telFix', 'telMobile','Fax','email', 'actions'];
    
    
    //users : users [] = [];
  
    constructor(private service: FournisseurService, private rout: Router, 
      public dialog: MatDialog, public notification: MatSnackBar,
     ) { }
  
    ngOnInit() {
      this.fetchElements();
    }
  
    fetchElements() {
      this.service.findAll().subscribe(res => {
        if (!res) { return; }
        console.log(res);
        this.dataSource = new MatTableDataSource(res as any);
      });
    }
  
  fetch(){
  this.service.findAll().subscribe(res=>{
  if (!res) {return;}
  console.log(res)
  this.dataSource=new MatTableDataSource(res as any);
  
  });
  
  }
  
  openDialogg(): void {
  const dialogRef = this.dialog.open(FournisseurComponent, {
  width: '700px'
  });
  dialogRef.afterClosed().subscribe(result => {
  this.fetch();
  
  });
  this.fetch();
  
  }
  
  
  onEdit(row){
  this.service.populateform(row);
  this.openDialog();
  }
  
  applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  onDelete(id){
  if(confirm('Are you sure?')){
  this.Delete(id);
  }
  }
  
  Delete(id){
  this.service.delete(id).subscribe(()=>{
  this.notification.open("success delete");
  this.fetch();
  })
  
  }
  }