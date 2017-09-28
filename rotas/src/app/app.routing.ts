import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

/*
    O objeto do tipo Routes é um array que recebe objetos
    contendo chave-valor com duas propriedades básicas:

    path: o caminho que será usado no browser
    component: o componente que será renderizado no path indicado
*/
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent},
    { path: 'login', component: LoginComponent }
];

/*
    RouterModule.forRoot: para arquivos que contém as rotas raízes da aplicação

    RouterModule.forChild: para rotas secundárias ou rotas de funcionalidades da aplicação.
*/
// é necessário fazer o export da constante com as configurações de roteamento
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);