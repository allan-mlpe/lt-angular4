import { Routes, RouterModule } from '@angular/router';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [
    /* 
        como já declaramos 'cursos' no AppRoutingModule para o 
        lazy loading podemos passar aqui a string vazia como base
    */
    {path: "", component: CursosComponent},
    {path: "cursoNaoEncontrado", component: CursoNaoEncontradoComponent},
    {path: ":id", component: CursoDetalheComponent}
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}
