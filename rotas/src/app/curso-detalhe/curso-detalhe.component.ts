import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    console.log(route);

    //pegando o id que é passado na rota
    //o nome 'id' foi definido na configuração da rota no app.routing.ts
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
