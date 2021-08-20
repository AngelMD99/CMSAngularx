import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
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
  

  constructor (
    public dialog: MatDialog
  ){}
  
  openDialog(): void{
    
    const dialogRef=this.dialog.open(AddDialogComponent,{});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }
}
