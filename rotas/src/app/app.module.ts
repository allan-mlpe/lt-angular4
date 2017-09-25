import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { ROUTING } from "./app.routing";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    ROUTING //import da constante de rotas da aplicação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
