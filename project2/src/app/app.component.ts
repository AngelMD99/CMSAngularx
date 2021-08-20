import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

var dialog_title:string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'EjercicioCRM';
  recibidodePadre: any;
  padreForm: FormControl = new FormControl();
  names= new Object();
  

  constructor (
    public dialog: MatDialog
    
  ){ this.names = [

    'Criss',
    'Carlos',
    'Gonzalo',
    'Lucas',
    'Amanda',
    'Luis',
    'Eduardo'
  
  ];}
  
  openDialog(pop_tittle:string): void{
    this.recibidodePadre=pop_tittle;
    console.log("Valor Recibido:",this.recibidodePadre);
    const dialogRef=this.dialog.open(AddDialogComponent,{});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}
