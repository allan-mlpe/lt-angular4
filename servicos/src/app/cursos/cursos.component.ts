import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  //declarando uma variável de serviços na mão
  //se usar a injeção de dependências
  cursosService: CursosService;

  constructor() {
    this.cursosService = new CursosService();
   }

  
  /*
   * Para obtenção dos dados é indicado usar o método ngOnInit
   */
   ngOnInit() {
     //obtendo os cursos do serviço criado manualmente
     this.cursos = this.cursosService.getCursos();
  }

}
