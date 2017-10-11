import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

import { AuthGuard } from './guards/auth-guard';
import { AlunosGuard } from './guards/alunos-guard';
import { CursosGuard } from './guards/cursos-guard';

const appRoutes: Routes = [
    //===================== CONFIGURAÇÃO PARA LAZY LOADING =====================
    //para o loadChindren devemos passar o caminho completo do MÓDULO requerido
    { path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard], //declaramos a guarda de rotas no metadado canActivate
        canActivateChild: [CursosGuard] //também declaramos guarda de rotas filhas no metadado canActivateChild
    },
    { path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard]/*,
        canActivateChild: [AlunosGuard]*/ //podemos usar a guarda de rotas filhas no módulo de alunos também
                                          //isso faz com que a guarda de rotas filhas não seja ativada no acesso à rota pai
                                          //AlunosGuard será declarada no alunos.routing.module.ts
    },
    { path: 'login', 
         loadChildren: 'app/login/login.module#LoginModule'
    },
    //==========================================================================
    //{ path: 'cursos', component: CursosComponent},
    //{ path: 'curso/:id', component: CursoDetalheComponent},
    //{ path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent },
    //{ path: 'login', component: LoginComponent },
    { path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}