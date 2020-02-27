import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { ProduitService } from 'src/app/services/produit.service';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitComponent } from '../produit/produit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource = new MatTableDataSource<Produit>();
  displayedColumns: string[] = ['id', 'nom_court', 'nom_produit', 'prixBase', 'prixVente', 
  'seuil_max_remise', 'unite_produit', 'img_produit', 'quantite_actuel','quantite_initiale', 'actions'];
  
  
  //users : users [] = [];

  constructor(private service: ProduitService, private rout: Router, 
    public dialog: MatDialog, public notification: MatSnackBar) { }

  ngOnInit() {
    this.fetchElements();
  }

  openDialogg(): void {
    const dialogRef = this.dialog.open(ProduitComponent, {
    width: '700px'
    });
    dialogRef.afterClosed().subscribe(result => {
    this.fetch();
    
    });
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

openDialog(): void {
const dialogRef = this.dialog.open(ProduitComponent, {
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


