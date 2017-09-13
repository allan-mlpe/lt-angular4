import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Cursos2Service } from './cursos2.service';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [CursosComponent],
  providers: [Cursos2Service]
})
export class CursosModule { }
