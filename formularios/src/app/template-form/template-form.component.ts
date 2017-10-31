import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  /**
   * objeto base que será usado para 
   * preencher o formulário com valores
   * padrões
   */
  usuario: any = {
    nome: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

  /**
   * Método a ser executado quando da submissão do formulário
  */
  onSubmit(form) {
    console.log(form);

    console.log(this.usuario);
  }

}
