import { Injectable } from '@angular/core';
import { Aluno } from "./aluno";

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
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

  /**
   * Recupera um aluno da lista de alunos de acordo com o ID passado
   * @param id id do aluno a ser recuperado
   */
  getAlunoById(id: number): any {
    return Object.assign({}, this.alunos.find(
      aluno => {
        return aluno.id == id  
      }
    ));
  }

  saveAluno(aluno: any): void {
    if(aluno.id) {
      let index = this.alunos.findIndex(al => al.id == aluno.id);
      this.alunos[index] = aluno;
      
    } else {
      aluno.id = this.getNextId();
      this.alunos.push(aluno);
    }
  }

  getNextId(): number {
    let lastId = this.alunos[this.alunos.length-1].id;
    console.log(lastId);
    return ++lastId;
  }

  constructor() { }

}
