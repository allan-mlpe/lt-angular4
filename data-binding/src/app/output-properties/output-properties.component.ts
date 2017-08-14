import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
  //, outputs: ['mudouValor'] //também podemos definir os outputs nos metadados do componente
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;

    //emitindo um evento baseado no objeto mudouValor
    //podemos passar um objeto a ser emitido
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
