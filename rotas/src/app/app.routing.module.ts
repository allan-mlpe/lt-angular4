import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    //===================== CONFIGURAÇÃO PARA LAZY LOADING =====================
    //para o loadChindren devemos passar o caminho completo do MÓDULO requerido
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule' },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule' },
    
    //==========================================================================
    //{ path: 'cursos', component: CursosComponent},
    //{ path: 'curso/:id', component: CursoDetalheComponent},
    //{ path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}