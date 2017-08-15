import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  //passamos para o ViewChild o nome do campo definido no template
  @ViewChild('campoInput') campoValorInput: ElementRef;

  //o HTMLElement também serve para componentes do Angular
  @ViewChild('nomeComponente') campoComponente: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    console.log(this.campoComponente);

    this.campoValorInput.nativeElement.value++;

    //emitindo um evento baseado no objeto mudouValor
    //podemos passar um objeto a ser emitido
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
