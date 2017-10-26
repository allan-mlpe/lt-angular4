import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { ROUTING } from "./app.routing";

//modulo de rotas
import { AppRoutingModule } from './app.routing.module';

//módulos de funcionalidades
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

import { AuthService } from './login/auth.service';

import { AuthGuard } from './guards/auth-guard';
import { CursosGuard } from './guards/cursos-guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { AlunosGuard } from './guards/alunos-guard';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    //CursosModule, // para utilizar o lazy loading, os módulos não devem ser
    //AlunosModule, // importados em nenhum outro lugar da app que não o AppRoutingModule
    AppRoutingModule
    //ROUTING //import da constante de rotas da aplicação
  ],
  providers: [
    AuthService,
    AuthGuard, //também declaramos a guarda de rotas no providers
    CursosGuard/*,
    AlunosGuard*/ //guarda de rotas filhas de alunos movida para o alunos.module.ts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
