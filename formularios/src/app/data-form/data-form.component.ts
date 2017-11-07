import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    // criação de formulário com FormGroup
    this.formulario = new FormGroup({
      /*
        aqui seguimos a seguinte sintaxe:

        nomeDoCampo: new FormControl(valorInicialDoCampo)
      */
      nome: new FormControl(null),
      email: new FormControl(null)
    });
  }

}
