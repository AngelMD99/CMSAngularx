import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,   
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    ComponentsModule

  
  ],
  entryComponents:[AddDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
