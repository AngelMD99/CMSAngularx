import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDialogComponent } from './add-dialog/add-dialog.component';



@NgModule({
  declarations: [
    AddDialogComponent
  ],
  imports: [    
    CommonModule
  ],
  exports:[
    AddDialogComponent
  ]
})
export class ComponentsModule { }
