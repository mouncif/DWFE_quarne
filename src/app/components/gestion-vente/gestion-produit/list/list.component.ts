import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { ProduitService } from '../../../../services/produit.service';
import { Router } from '@angular/router';
import { Produit } from '../../../../models/produit.model';
import { ProduitComponent } from '../produit/produit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource = new MatTableDataSource<Produit>();
  displayedColumns: string[] = ['img_produit', 'nom_court', 'nom_produit', 'prixBase', 'prixVente', 
  'seuil_max_remise', 'unite_produit', 'quantite_actuel','quantite_initiale', 'actions'];
  

  constructor(private service: ProduitService, private rout: Router, 
    public dialog: MatDialog, public notification: MatSnackBar) { }

  ngOnInit() {
    this.fetchElements();
  }

  openDialogg(): void {
    const dialogRef = this.dialog.open(ProduitComponent, {
    width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.form.reset();
      this.fetch();
      
      });
      this.service.form.reset();
      this.fetch();
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
  refresh():void{
    this.fetchElements();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProduitComponent, {
    width: '600px'
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
    if(confirm('Êtes-vous sûr de supprimer ce produit?')){
      this.Delete(id);
    }
  }

  Delete(id){
    this.service.delete(id).subscribe(()=>{
      this.notification.open('Produit supprimé ...','Fermer', {
        duration: 4000,
      });
      this.fetch();
      });
  }
}


