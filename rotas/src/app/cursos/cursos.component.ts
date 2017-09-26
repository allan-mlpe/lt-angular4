import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  pagina: number;
  cursos: any[];

  inscricao: Subscription;

  constructor(
    private cursosService: CursosService, 
    private route: ActivatedRoute, 
    private router: Router) {

   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    // agora estamos pegando os queryParams
    this.inscricao = this.route.queryParams.subscribe(
      queryParams =>
        this.pagina = queryParams['pagina']
    );
  }

  ngOnDestroy() {
    //cancelando inscrição
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/cursos'], {
      queryParams: {pagina: ++this.pagina}
    });
  }

}
