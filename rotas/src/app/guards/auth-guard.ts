import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
}
