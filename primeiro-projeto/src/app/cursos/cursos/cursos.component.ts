import { Component, OnInit } from '@angular/core';

//importação do serviço de cursos
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  temas: Array<string>;

   //injetamos a dependência diretamente no construtor
  constructor(private cursosService: CursosService) { 

    this.nomePortal = "Treinamento de AngularJS 4.x";

    //instanciação do serviço (sem injeção de dependência)
    //var service = new CursosService();
    this.temas = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
