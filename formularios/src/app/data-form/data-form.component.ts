import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  /**
   * Formulário
   */
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: Http) { }

  ngOnInit() {
    // criação de formulário com FormGroup
    /*
    this.formulario = new FormGroup({
        //aqui seguimos a seguinte sintaxe:
        //nomeDoCampo: new FormControl(valorInicialDoCampo)
      nome: new FormControl(null),
      email: new FormControl(null)
    });
    */

    /* 
      o código abaixo faz a mesma coisa do 
      código acima de uma maneira mais enxuta
    */
    // criação de formulário utilizando o FormBuilder
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      cep: [null, Validators.required],
      numero: [null, Validators.required],
      complemento: [null],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required]
    });
  }

  /**
   * Método executado quando formulário é submetido
   */
  onSubmit() {
    console.log(this.formulario);
    let formData = this.formulario.value;

    this.http.post('https://httpbin.org/post', JSON.stringify(formData))
      .map(res => res)
      .subscribe(res => {
        console.log(res)

        this.resetForm();
      },
      //tratamento de erro de requisição
      (error: any) => {
        console.log(error);
        alert(`Erro ao submeter formulário! ${ error.status } - ${ error.statusText }`);
      }
    );
  }

  /**
   * Reseta todos os campos do formulário
   */
  resetForm() {
    this.formulario.reset();
  }

   /**
   * Checa se um campo passado como parâmetro é inválido e se já foi tocado
   * @param campo atributo 'name' atribuído ao campo que será checado
   */
  checkInvalidAndTouchedField(campo: string): boolean {
    return this.formulario.get(campo).invalid && this.formulario.get(campo).touched;
  }

  /**
   * Adiciona classes de erro do Bootstrap a campos/labels caso um dado campo esteja inválido
   * @param campo atributo 'name' do campo que será validado
   */
  addErrorClasses(campo: string): object {
    return {
      'has-error': this.checkInvalidAndTouchedField(campo),
      'has-feedback': this.checkInvalidAndTouchedField(campo)
    };
  }
}
