import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private route: ActivatedRoute, 
                private cursosService: CursosService,
                private router: Router  
              ) {
    console.log(route);

    //pegando o id que é passado na rota
    //o nome 'id' foi definido na configuração da rota no app.routing.ts
    //this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    // realizamos uma inscrição no objeto params da 
    // ActivatedRoute para ouvir mudanças quando elas ocorrerem
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        // atribuindo o valor do parâmetro 'id' do obj params 
        this.id = params['id'];
      }
    );

    this.curso = this.cursosService.getCursoById(this.id);

    //se o curso não existir (undefined ou null)
    if(!this.curso) {

      // para o método navigate, passamos um objeto com
      // a rota para o qual o router deve redirectionar
      // (também podemos passar parâmetros como no routerLink)
      this.router.navigate(['/cursoNaoEncontrado']);
    }

  }

  ngOnDestroy() {
    //cancelamos a inscrição ao destruir o componente
    //uma vez que a mesma fica ativa por default mesmo
    //após o componente ser destruído
    this.inscricao.unsubscribe();
  }
}
