import { Injectable } from '@angular/core';

//declarando que a classe é injetável
@Injectable()
export class Cursos2Service {

    getCursos() {
        return ['Angular', 'JavaScript', 'TypeScript'];
    }
}