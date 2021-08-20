import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';




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
