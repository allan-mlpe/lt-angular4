import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = 'white';
  
  //se quisermos, podemos expor um InputProperty com nomes diferentes,
  //mesmo que seja igual ao nome da diretiva. O Angular sabe diferenciar.
  @Input('highlight') highlightColor: string = 'lightgreen';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  /**
   * Método padrão que é executado quando a diretiva é inicializada
   */
  ngOnInit() {
    //definimos o valor padrão vindo do InputProperty do elemento da diretiva
    this.backgroundColor = this.defaultColor;
  }
}
