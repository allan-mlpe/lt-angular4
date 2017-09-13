//usamos o CommonModule para módulos de funcionalidade
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Cursos2Service } from '../cursos/cursos2.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CriarCursoComponent //expondo o componente para outros módulos
  ],
  providers: [Cursos2Service]
})
export class CriarCursoModule { }
