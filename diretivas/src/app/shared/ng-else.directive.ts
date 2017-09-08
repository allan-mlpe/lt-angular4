// TemplateRef: faz referência à tag template
// ViewContainerRef: faz referência ao conteúdo da tag template (coteúdo que queremos renderizar)
import { Directive, Input,
  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean) {
    if(!condition) {
      //pega o template
      this._viewContainerRef
      .createEmbeddedView(this._templateRef);  //cria o conteúdo com o método createEmbeddedView
                                               //passando o template _templateRef como parâmetro
    } else {
      //destroi o elemento
      this._viewContainerRef.clear();
    }
  } 

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
