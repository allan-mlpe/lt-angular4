import { Injectable, EventEmitter } from '@angular/core';

//declarando que a classe é injetável
@Injectable()
export class Cursos2Service {

    /*
        O atributo emitirCursoCriado estará disponível
        para todos os componentes que compartilhem a
        mesma instância do serviço
    */
    emitirCursoCriado = new EventEmitter<string>(); //podemos ou não tipar o EventEmitter

    /*
        Com o atributo estático a emitirCursoCriado
        será compartilhada por todas as instâncias do serviço
        mesmo que sejam instâncias diferentes
    */
    static emitirCursoCriadoStatic = new EventEmitter<string>();

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

        this.emitirCursoCriado.emit(curso);

        Cursos2Service.emitirCursoCriadoStatic.emit(curso);
    }
}