import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

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

    //injeção do serviço LogService no construtor do serviço Cursos2Service
    constructor(private logService: LogService) {
        //console.log('Init CursosService..');
        this.logService.consoleLog('Init Cursos2Service...');
    }

    /**
     * Obtém a lista de todos os cursos
     */
    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos...');
        return this.cursos;
    }

    /**
     * Adiciona um novo curso à lista de cursos
     * @param curso curso a ser inserido
     */
    addCurso(curso: string) {

        //usando crase podemos usar template strings para evitar a concatenação de strings
        this.logService.consoleLog(`Adicionando o curso "${curso}" à lista de cursos...`);

        this.cursos.push(curso);

        this.emitirCursoCriado.emit(curso);

        Cursos2Service.emitirCursoCriadoStatic.emit(curso);
    }
}