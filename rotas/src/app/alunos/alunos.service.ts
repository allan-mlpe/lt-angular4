import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any = [
    {id: 1, nome: "Zezinho", email: "zezinho_10@email.com"},
    {id: 2, nome: "Jão", email: "jao@email.com"},
    {id: 3, nome: "Zefinha", email: "zefinha_hta@email.com"},
    {id: 4, nome: "Wolks", email: "wolks-sk8@email.com"},
    {id: 5, nome: "Scarlet", email: "smki@email.com.br"}
  ];

  /**
   * Retorna a lista de todos os alunos.
   */
  getAlunos(): any[] {
    return this.alunos;
  }

  constructor() { }

}
