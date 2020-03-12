import { Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client/client.component';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Client } from '../../../../models/client.model';
import { ClientService } from '../../../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {


  openDialog(): void {
    const dialogRef = this.dialog.open(ClientComponent, {
    width: '500px'
  });
  
  dialogRef.afterClosed().subscribe(result => {
    this.fetchElements();
  
    });
  
  }
  
  /////////////
  
    dataSource = new MatTableDataSource<Client>();
    displayedColumns: string[] = ['photo', 'nom_Cl', 'prenom_Cl', 'statut',
     'tel', 'email','adresse','ville', 'actions'];
    
  
    constructor(private service: ClientService, private rout: Router, 
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
    const dialogRef = this.dialog.open(ClientComponent, {
    width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.form.reset();
    this.fetch();
    
    });
    this.service.form.reset();
    this.fetch();
  
  }
  refresh():void{
    this.fetchElements();
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