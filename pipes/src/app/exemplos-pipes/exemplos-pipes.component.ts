import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
