import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { ROUTING } from "./app.routing";

//modulo de rotas
import { AppRoutingModule } from './app.routing.module';

//módulos de funcionalidades
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //CursosModule, // para utilizar o lazy loading, os módulos não devem ser
    //AlunosModule, // importados em nenhum outro lugar da app que não o AppRoutingModule
    AppRoutingModule
    //ROUTING //import da constante de rotas da aplicação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
