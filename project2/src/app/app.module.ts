import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { AddDialogComponent } from './src/app/components/add-dialog/add-dialog.component';



@NgModule({
  declarations: [
    AppComponent,   
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  
  ],
  entryComponents:[AddDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
