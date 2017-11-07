import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //import do operador map

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

  constructor(private http: Http) { }

  ngOnInit() {
  }

  /**
   * Método a ser executado quando da submissão do formulário
  */
  onSubmit(form) {
    console.log(form);

    console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(res => console.log(res));
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

  buscarCEP(cep: string, form: NgForm) {
    
    //remove caracteres não numéricos do CEP
    cep = cep.replace(/\D/g, '');
    
    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => {
          //console.log(dados);
          //console.log(form);
          this.populaDadosForm(dados, form);
        });
      }
    }
  }

  /**
   * Popula os campos do formulário com os dados vindos do webservice de CEP
   * @param dados dados vindos do webservice
   * @param formulario formulário que será populado com os dados
   */
  populaDadosForm(dados: object, formulario: NgForm) {
    //utilizando setValue precisamos passar um objeto com todos os campos do form
    /* formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados['cep'],
        numero: "",
        complemento: dados['complemento'],
        rua: dados['logradouro'],
        bairro: dados['bairro'],
        cidade: dados['localidade'],
        estado: dados['uf']
      }
    }); */

    //utilizando patchValue podemos passar apenas os campos que queremos popular
    formulario.form.patchValue({
      endereco: {
        cep: dados['cep'],
        numero: "",
        complemento: dados['complemento'],
        rua: dados['logradouro'],
        bairro: dados['bairro'],
        cidade: dados['localidade'],
        estado: dados['uf']
      }
    });
  }
}
