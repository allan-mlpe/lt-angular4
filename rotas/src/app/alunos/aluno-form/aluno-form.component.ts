import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AlunosService } from "../alunos.service";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  private inscricao: Subscription;
  aluno: any;

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.routes.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAlunoById(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
