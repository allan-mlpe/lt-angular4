import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

//import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from './Iform-candeactivate';

@Injectable()
//export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
    
    //mudança de tipo recebido pela interface CanDeactivate para a interface genérica criada
    export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {        
        /*
            Este método será executado sempre que o usuário DEIXAR as rotas
            cujo a guarda canDeactivate esteja declarada.
        */
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            
            /*
                chama a função que pede a confirmação do usuário
                sobre a vontade de sair da rota em questão
            */
            //let x = component.podeMudarRota();
            //return x;
            return component.podeDesativar();
        }
}