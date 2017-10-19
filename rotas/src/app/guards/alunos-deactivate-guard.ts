import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
        
        /*
            Este método será executado sempre que o usuário DEIXAR as rotas
            cujo a guarda canDeactivate esteja declarada.
        */
        canDeactivate(
            component: AlunoFormComponent,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            
            /*
                chama a função que pede a confirmação do usuário
                sobre a vontade de sair da rota em questão
            */

            let x = component.podeMudarRota();
            //console.log('pode mudar? ' + x );
            //return component.podeMudarRota();
            return x;
        }
}