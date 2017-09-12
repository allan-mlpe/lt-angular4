import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { Cursos2Service } from './cursos2.service'; //classe injetável

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

  //injetando a dependência Cursos2Service no construtor
  constructor(private _cursos2Service: Cursos2Service) {
    //this.cursosService = new CursosService();
    
    //fornecendo uma instância do cursos2services automaticamente
    this.cursosService = _cursos2Service;
   }

  
  /*
   * Para obtenção dos dados é indicado usar o método ngOnInit
   */
   ngOnInit() {
     //obtendo os cursos do serviço criado manualmente
     this.cursos = this.cursosService.getCursos();
  }

}
