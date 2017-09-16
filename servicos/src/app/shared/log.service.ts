import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  /**
   * Imprime uma mensagem passada como parâmetro no console do browser
   * @param msg mensagem a ser impressa no console do browser
   */
  consoleLog(msg: string) {
    console.log(msg);
  }

}
