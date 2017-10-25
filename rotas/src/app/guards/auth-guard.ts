import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  /*
   * Este método é executado antes da exibição de um componente
   * de acordo com as rotas configuradas no app.routing.module.ts
   */
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    
    const usuarioLogado: boolean = this.authService.usuarioLogado();

    if(usuarioLogado) {
      /*
        se o usuário está logado, retorna true e
        autoriza o usuário a acessar a rota
      */
      return true;
    }

    /*
      se o usuário não está logado, rediciona
      o mesmo para a página de login e retorna falso
    */
    this.router.navigate(['/login']);
    console.log('usuário não autorizado [from AuthGuard]');
    return false;
  }

  /**
   * Método da interface CanLoad que permite ou não baixar o código
   * de determinada rota de acordo com as permissões do usuário no momento
   * @param route 
   */
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
}
