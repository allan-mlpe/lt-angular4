import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Rx";
import { Aluno } from "../aluno";
import { AlunosService } from './../alunos.service';

@Injectable()
// esse resolver vai carregar um objeto do tipo aluno
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(
        private alunosService: AlunosService,
        private route: ActivatedRoute
    ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            /* 
                lógica para recuperar um aluno 
                a partir do ID passado na rota
            */
            let id = route.params['id'];

            return this.alunosService.getAlunoById(id);
    }
}