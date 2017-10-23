import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlunosService } from "../alunos.service";
import { Aluno } from "../aluno";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  private inscricao: Subscription;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {
    // o código abaixo está comentado porque essa lógica
    // foi movida para dentro do resolver criado (AlunoDetalheResolver)
    /*
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']; 

        this.aluno = this.alunoService.getAlunoById(id);
      }
    );
    */

    /*
      o objeto data da rota contém os dados criados
      como o 'aluno' que foi carregado anteriormente
      por meio do resolver (AlunoDetalheResolver)
    */
    this.inscricao = this.route.data.subscribe(
      (info: { aluno : Aluno }) => {
        console.log(info);
        /*
          o 'aluno' passado como chave é o nome que definimos
          no metadado 'resolve' na configuração da rota no
          arquivo alunos.routing.module.ts
        */
        this.aluno = info['aluno'];
        //this.aluno = info.aluno // também pode ser acessado assim
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['alunos', this.aluno.id, 'editar']);
  }
}
