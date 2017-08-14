import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
  //, inputs: ['nomeCurso:nome'] //eventualmente podemos definir os inputs aqui
})
export class InputPropertiesComponent implements OnInit {

  //passando 'nome' como parâmetro para o Input, nós podemos
  //definir um nome de variável diferente para expor enquanto
  //dentro do módulo a variável é tratada com nome diferente (nomeCurso)
  @Input('nome') nomeCurso: string;

  constructor() { }

  ngOnInit() {
  }

}
