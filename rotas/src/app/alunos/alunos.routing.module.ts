import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

import { AlunosGuard } from './../guards/alunos-guard';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate-guard';

/*
    Declaramos primeiro alunos/novo para evitar 
    conflito com a rota alunos/:id.
    
    Devemos declarar sempre as rotas hardcoded primeiro.
*/
const alunosRoutes: Routes = [
    /*
        como já declaramos a rota "alunos" no AppRoutingModule
        podemos passar a string vazia como base aqui
    */
    { path: "", component: AlunosComponent, 
        canActivateChild: [AlunosGuard], //guarda de rotas filhas só será ativada quando
                                         //do acesso à alguma das rotas filhas declaradas abaixo
        children: [
            //abaixo temos a declaração da guarda no metadado canDeactivate
            { path: "novo", component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] },
            { path: ":id", component: AlunoDetalheComponent,
                /*
                    declaração de um resolver
                    
                    - aluno:  o nome do parâmetro que será passado
                              para as informações da rota que será
                              carregada no AlunoDetalheComponent

                    - AlunoDetalheResolver: o resolver propriamente dito
                */
                resolve: { aluno : AlunoDetalheResolver } 
            },
            { path: ":id/editar", component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}