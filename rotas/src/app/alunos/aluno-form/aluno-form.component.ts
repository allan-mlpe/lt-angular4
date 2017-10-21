import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AlunosService } from "../alunos.service";

import { IFormCanDeactivate } from './../../guards/Iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  private inscricao: Subscription;
  aluno: any;
  private formMudou = false;

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.routes.params.subscribe(
      (params: any) => {
        let id = params['id'];

        //criando uma cópia do objeto para evitar alterar a mesma referência
        this.aluno = this.alunosService.getAlunoById(id);

        if(this.aluno === undefined) {
          this.aluno = { id: '', nome: '', email: '' };
        }
      }
    );
  }

  isAlunoEmpty(): boolean {
    return this.aluno === undefined || (this.aluno.id === '' && this.aluno.nome === '' && this.aluno.email === '');
  }

  saveAluno() {
    this.alunosService.saveAluno(this.aluno);
    this.aluno = { id: '', nome: '', email: '' };
    this.formMudou = false;
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    let pode = true;
    if(this.formMudou) {
      pode = confirm("Deseja sair sem salvar as alterações?");
    }
    return pode;
  }

  //implementação do método da interface genérica para a desativação de rotas
  podeDesativar() {
    return this.podeMudarRota();
  }
}
