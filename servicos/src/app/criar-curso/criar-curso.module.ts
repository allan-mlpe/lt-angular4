//usamos o CommonModule para módulos de funcionalidade
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Cursos2Service } from '../cursos/cursos2.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent //como este componente será usado apenas internamente neste módulo
                                //não precisamos declará-lo no metadado exports
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
