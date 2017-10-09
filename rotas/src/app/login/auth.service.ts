import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenu = new EventEmitter<boolean>();

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'admin' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;

      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
    }
    this.mostrarMenu.emit(this.usuarioAutenticado);
  }

  usuarioLogado(): boolean {
    return this.usuarioAutenticado;
  }

  constructor(private router: Router) { }

}
