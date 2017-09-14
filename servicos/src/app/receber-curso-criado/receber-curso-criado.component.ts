import { Component, OnInit } from '@angular/core';

import { Cursos2Service } from './../cursos/cursos2.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: Cursos2Service) { }

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado

      //esta sintaxe também é aceita
      //function(cursoCriado) {
      //  this.curso = cursoCriado;  
      //}
    );
  }

}
