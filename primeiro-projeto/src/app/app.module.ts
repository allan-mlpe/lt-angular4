import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule} from './cursos/cursos.module'; //import do módulo criado

@NgModule({
  declarations: [ //podemos usar o CursosModule dentro de qualquer um desses componentes
    AppComponent,
    MeuPrimeiroComponent,
  ],
  imports: [
    BrowserModule,
     CursosModule //declaramos aqui o novo módulo criado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
