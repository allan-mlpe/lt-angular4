import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' //estamos definindo que essa diretiva seja aplicável apenas a elementos do tipo p
                              //também é possível definir que as diretivas sejam aplicadas apenas a outros componentes
                              //basta usar o seletor do componente!
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { 
    //o código abaixo é passível de ataques devido a problemas de segurança
    //this._elementRef.nativeElement.style.backgroundColor = "yellow";

    //corrigindo o problema de segurança com o renderer.
    this._renderer.setElementStyle(
      this._elementRef.nativeElement, //passamos o nativeElement do ElementRef
      "background-color", //definimos o nome da propriedade igual ao CSS
      "yellow" //valor da propriedade
    );
  }
}
