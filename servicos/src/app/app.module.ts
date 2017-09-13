import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { Cursos2Service } from './cursos/cursos2.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [
    Cursos2Service //serviços são fornecedores, então declaramo-os como providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
