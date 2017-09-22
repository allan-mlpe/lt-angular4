import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Gerenciando Conhecimento em Times de Desenvolvimento Ágil',
    rating: 4.812312,
    numeroPaginas: 142,
    preco: 180,
    dataLancamento: new Date(2017, 8, 8),
    url: 'https://www.amazon.com/Gerenciando-Conhecimento-Times-Desenvolvimento-%C3%81gil/dp/6202403225'
  };

  listaCursos: string[] = ['Angular', 'Java'];

  filtro: string = '';

  //valor passado no resolve será atribuído à variável valorAsync após 2 segundos
  valorAsync = new Promise((resolve, reject) =>
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  );

  //o valor será atribuído à variável valorAsync2 após 3 segundos
  valorAsync2 = Observable.interval(3000).map( v => 'Valor assíncrono com Observable');

  constructor() { }

  ngOnInit() {
  }

  addNovoCurso(curso) {
    this.listaCursos.push(curso);
  }

  obterCursos(): string[] {

    if(this.listaCursos.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.listaCursos;
    }

    return this.listaCursos.filter(
      c => c.toLowerCase().indexOf(this.filtro.toLowerCase()) !== -1
    );
  }
}
