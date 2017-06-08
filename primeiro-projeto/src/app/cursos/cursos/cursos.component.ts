import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  temas: Array<string> = ["Diretivas", "Serviços", "Módulos", "Componentes"];

  constructor() { 
    this.nomePortal = "Treinamento de AngularJS 4.x";
  }

  ngOnInit() {
  }

}
