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
  names: any;
  

  constructor (
    public dialog: MatDialog
    
  ){ this.names = [

    {
    full_name: 'Criss',
    location: 'Chihuahua',
    gender: 'M',
    phone: '6561237899'
    },
            
    {    
    full_name: 'Loreta',
    location: 'Juarez',
    gender: 'F',
    phone: '6561237899'},

    {
    full_name: 'Azrael',
    location: 'Chihuahua',
    gender: 'M',
    phone: '6561237899'
}
     
     
  
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
