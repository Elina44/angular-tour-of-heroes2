import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; /*pour avoir NgModels*/

import { TableComponent } from './table/table.component'; /*Création d'un nveau composant avec son import
dans les "Déclarations"*/
import { WcsAngularModule } from 'wcs-angular';

@NgModule({
  declarations: [AppComponent, TableComponent],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WcsAngularModule, // add the moduleWCS
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
