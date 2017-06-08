import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent, 
    CursoDetalheComponent //CursoDetalheComponent não pode ser usado diretamente no AppModule, pois não está declarado nos exports abaixo
  ],
  exports: [ //usamos o exports para expor componentes, serviços, etc. para fora do nosso módulo
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
