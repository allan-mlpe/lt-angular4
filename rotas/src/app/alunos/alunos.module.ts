import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  declarations: [ //todos os componentes declarados aqui terão acesso aos
                  //serviços declarados nos providers via injeção de dependência
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [AlunosService]
})
export class AlunosModule { }
