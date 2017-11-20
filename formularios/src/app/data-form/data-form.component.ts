import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/models/estado-br.model';

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

  estados: Array<EstadoBr>;

  constructor(private formBuilder: FormBuilder,
              private http: Http,
              private dropDownService: DropdownService) { }


  setNomeEstado(uf: string): string {
    let estado = this.estados.find(estado => estado.sigla === uf);
    return estado.nome;
  }

  ngOnInit() {

    //carrega informações dos estados
    this.dropDownService.getEstadosBr()
      .subscribe(dados => { this.estados = dados; console.log(dados); });

    // criação de formulário com FormGroup
    /*
    this.formulario = new FormGroup({
      //aqui seguimos a seguinte sintaxe:
      //nomeDoCampo: new FormControl(valorInicialDoCampo)
      nome: new FormControl(null),
      email: new FormControl(null),
      endereco: new FormGroup({
        cep: new FormGroup(null),
        numero: new FormGroup(null),
        complemento: new FormGroup(null),
        estado: new FormGroup(null),
        cidade: new FormGroup(null),
        bairro: new FormGroup(null),
      })
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
      //aninhando formgroups
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  /**
   * Método executado quando formulário é submetido
   */
  onSubmit() {
    console.log(this.formulario);

    if(this.formulario.valid) {
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

    } else {
      console.log('formulário inválido');
      this.validaCamposDoForm(this.formulario);
    }
  }

  validaCamposDoForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(
      campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle.markAsDirty();

        /* 
          se o controle for um formGroup
          chamamos a função recursivamente
        */
        if(controle instanceof FormGroup) {
          this.validaCamposDoForm(controle);
        }
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
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
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

  buscarCEP() {
    let cep = this.formulario.get('endereco.cep').value;

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
          this.populaDadosForm(dados);
        });
      }
    }
  }

  /**
   * Popula os campos do formulário com os dados vindos do webservice de CEP
   * @param dados dados vindos do webservice
   * @param formulario formulário que será populado com os dados
   */
  populaDadosForm(dados: object) {
    this.formulario.patchValue({
      endereco: {
        cep: dados['cep'],
        numero: "",
        complemento: dados['complemento'],
        rua: dados['logradouro'],
        bairro: dados['bairro'],
        cidade: dados['localidade'],
        estado: this.setNomeEstado(dados['uf'])
      }
    });
  }
}
