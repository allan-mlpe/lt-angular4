import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

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

  /**
   * Checa se um campo passado como parâmetro é inválido e se já foi tocado
   * @param campo campo a ser verificado
   */
  checkInvalidAndTouchedField(campo: NgModel): boolean {
    return campo.invalid && campo.touched;
  }

  /**
   * Adiciona classes de erro do Bootstrap a campos/labels caso um dado campo esteja inválido
   * @param campo campo que será validado
   */
  addErrorClasses(campo: NgModel): object {
    return {
      'has-error': this.checkInvalidAndTouchedField(campo),
      'has-feedback': this.checkInvalidAndTouchedField(campo)
    };
  }

}
