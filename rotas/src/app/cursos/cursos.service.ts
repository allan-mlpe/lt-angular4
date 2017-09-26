import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos() {
    return [
      {id: 1, nome: 'Angular 4'},
      {id: 2, nome: 'Java'},
      {id: 3, nome: 'Docker'},
      {id: 4, nome: 'DevOps'},
      {id: 5, nome: 'GitLab'}
    ];
  }

  constructor() { }

}
