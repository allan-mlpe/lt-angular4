import { Injectable } from '@angular/core';

@Injectable() //indica que essa classe pode ser injetada
export class CursosService {
  
  constructor() { }

  getCursos() {
    return ["Diretivas", "Serviços", "Módulos", "Componentes"];
  }

}
