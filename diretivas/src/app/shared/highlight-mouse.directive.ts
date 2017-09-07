// a classe HostListener fica escutando os elementos que tem a nossa diretiva declarada
// a classe HostBinding permite a associação de uma variável a um atributo/classe do elemento hospedeiro
import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // passamos como parâmetro o atributo/classe que queremos alterar
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  //se for necessária alguma manipulação antes de definir o valor podemos
  //definir os métodos get e set. Se não for necessário, usamos a declaração
  //de variável simples acima
  @HostBinding('style.backgroundColor') get setBackgroundColor() { //declaração de métodos get e set
    //qualquer código extra
    return this.backgroundColor;
  }
  
  private backgroundColor: string;

  // passamos como parâmetro para o HostListener o nome do evento que quero escutar
  // também declaramos o método que será chamado
  @HostListener('mouseenter') onMouseOver() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement, 
      'background-color', 
      'orange'
    );*/
    this.backgroundColor = 'orange';
  }

  /**
   * Método a ser executado quando o mouse deixar o elemento
   */
  @HostListener('mouseleave') onmouseleave() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white';
  }

  constructor(
    //private _elementRef: ElementRef, 
    //private _renderer: Renderer
  ) {

   }

}
