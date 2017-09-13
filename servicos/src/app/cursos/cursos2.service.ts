import { Injectable } from '@angular/core';

//declarando que a classe é injetável
@Injectable()
export class Cursos2Service {

    cursos: string[] = ['Angular', 'JavaScript', 'TypeScript'];

    constructor() {
        console.log('Init CursosService..');
    }


    /**
     * Obtém a lista de todos os cursos
     */
    getCursos() {
        return this.cursos;
    }

    /**
     * Adiciona um novo curso à lista de cursos
     * @param curso curso a ser inserido
     */
    addCurso(curso: string) {
        this.cursos.push(curso);
    }
}