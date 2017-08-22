import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import do módulo do materialize que contém as diretivas do mesmo
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
