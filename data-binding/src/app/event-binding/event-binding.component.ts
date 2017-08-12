import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  private valorAtual: string = "";
  private valorSalvo: string = "";
  private isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert("Cique!");
  }

  onKeyUp(event: KeyboardEvent) { //tipando o evento

    //utilizando a interface HTMLInputElement para obter o valor do campo de input
    //sem a declaração explícita, o angular terá um erro de compilação
    //console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  /**
   * Atribui o valor do campo de texto à variável valorSalvo sempre que a tecla ENTER for pressionada
   * @param valor valor que está no campo de input
   */
  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
