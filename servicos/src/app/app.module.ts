import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { Cursos2Service } from './cursos/cursos2.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Cursos2Service //serviços são fornecedores, então declaramo-os como providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
