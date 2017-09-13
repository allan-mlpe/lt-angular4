import { Cursos2Service } from './../cursos/cursos2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  curso: string = '';

  constructor(private cursosService: Cursos2Service) { 
    
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  onAddCurso() {
    if(this.curso !== '') {
      this.cursosService.addCurso(this.curso);
      this.curso = '';
    }
  }

}
