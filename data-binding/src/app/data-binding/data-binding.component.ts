import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://site.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/nature/";


  /**
   * valor que será passado para o componente input-properties
   * */
  nomeDoCurso: string = "Angular";

  constructor() { }

  ngOnInit() {
  }

  /**
   * Método usado no template
   */
  getValor() {
    return 10;
  }

  /**
   * Método usado no template
   */
  getCurtirCurso() {
    return true;
  }
}
