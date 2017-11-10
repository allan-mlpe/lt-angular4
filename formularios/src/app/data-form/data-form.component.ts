import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
      nome: [null],
      email: [null]
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
      .subscribe(res => console.log(res));
  }
}
