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

  //=================== AULA DE INPUT PROPERTIES ===================
  /**
   * valor que será passado para o componente input-properties (app-curso)
   * */
  nomeDoCurso: string = "Angular";
  //============================= END ===============================
  

  //=================== AULA DE OUTPUT PROPERTIES ===================
  /**
   * valor que será usado para o componente contador
   */
  valorInicial: number = 10;

  onMudouValor(evento) {
    console.log(evento);
  }
  //============================= END ===============================
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
