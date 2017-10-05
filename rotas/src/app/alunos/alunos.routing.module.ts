import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

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
    { path: "", component: AlunosComponent, children: [
        { path: "novo", component: AlunoFormComponent },
        { path: ":id", component: AlunoDetalheComponent },
        { path: ":id/editar", component: AlunoFormComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}