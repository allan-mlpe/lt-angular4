# lt-angular4
Curso de Angular 2.x/4.x do site http://loiane.training/.


<h3>Módulo de Introdução</h3>
<hr>
<h4>Aula 01</h4>

- Introdução ao Angular 2.x/4.x.

<h4>Aula 02</h4>

- Instalação do ambiente de desenvolvimento.

- Node.js.

- npm.

- angular-cli.

<h4>Aula 03</h4>

- Criando o primeiro app com o angular-cli.

- ng new.

- Criando o primeiro componente.

- ng generate component (ng g c).

- Projeto base: primeiro-projeto.

<h4>Aula 04</h4>

- Peculiaridades do TypeScript.

- Projeto base: hello-typescript.

<h4>Aula 05</h4>

- Criando o primeiro módulo.

- ng generate module (ng g m).

- Importando módulos para o AppModule.

- Expondo componentes de módulos com o export.

- Projeto base: primeiro-projeto.

<h4>Aula 06</h4>

- Conhecendo diretivas.

- Utilizando o ngFor.

- Projeto base: primeiro-projeto.

<h4>Aula 07</h4>

- Criando o primeiro serviço.

- ng generate service (ng g s).

- Injetando dependências.

- Projeto base: primeiro-projeto.

<h4>Aula 08</h4>

- Conhecendo plugins úteis para a produtividade.


<h3>Módulo de Data Binding</h3>
<hr>
<h4>Aula 09</h4>

- Introdução aos tipos de binding.

- Interpolação: {{ value }}.

- Property bind: [property]="value".

- Property bind +1: bind-property="value".

- Tags sem propriedades: Ex.[attr.colspan].

- Projeto base: data-binding.

<h4>Aula 10</h4>

- Declarando variáveis locais de template: #variableName.

- Class binding.

- [class.class-name]="x == y".

- class="{{ class-name }}".

- Style binding.

- [style.property]="x == y ? 'value1' : 'value2'".

- Instalação do bootstrap com angular-cli.

<h4>Aula 11</h4>

- Aprendendo sobre event binding.

- (click), (blur), (keyup), (keyup.enter), (mouseout) e (mouseover).

- Passando eventos para funções: $event.

- Tipando eventos: KeyboardEvent.

- Utilizando a interface HTMLInputElement.

- Forma alternativa de declarar eventos: on-click, on-keyup, etc.

<h4>Aula 12</h4>

- O two-way data-binding do Angular 2/4.

- [(ngModel)] e bindon-ngModel.

- Habilitando o ngModel em formulários com o módulo FormsModule.

- import { FormsModule } from '@angular/forms'.

<h4>Aula 13</h4>

- Passando valores de um componente para o outro.

- @Input do pacote @angular/core.

- Expondo propriedades com nomes de variáveis diferentes: @Input('valorExterno) valorInterno: any.

- Declarando inputs nos metadados do componente.

- Referências desta aula também se encontram no componente 'data-binding'.

<h4>Aula 14</h4>

- Emitindo eventos de um componente filho para um componente pai.

- @Output do pacote @angular/core.

- Criando eventos com a classe EventEmitter.

- Emitindo objetos com eventos customizados: evento.emit({propriedadeObjeto: valor}).

- Declarando outputs nos metadados do componente.

- Referências desta aula também se encontram no componente 'data-binding'.

<h4>Aula 15</h4>

- O ciclo de vida dos componentes do Angular.

- OnInit.

- OnChanges.

- DoCheck.

- AfterContentInit.

- AfterContentChecked.

- AfterViewInit.

- AfterViewChecked.

- OnDestroy.

<h4>Aula 16</h4>

- Manipulando DOM e template com o @ViewChild do pacote @angular/core.

- Utilizando HTMLElement e ElementRef.

- Alterando valor de input com o nativeElement.value.

- Acessando outros componentes com o @ViewChild.


<h3>Módulo do Angular CLI</h3>
<hr>
<h4>Aula 17</h4>

- Instalando o Angular CLI.

- Criando um projeto: ng new nome-do-projeto.

- Rodando um projeto: o ng serve.

<h4>Aula 18</h4>

- Criando componentes: ng g component nome-do-componente.

- Criando serviços: ng g service nome-do-servico.

- Criando diretivas: ng g directive nome-da-diretiva.

- Criando pipes: ng g pipe nome-do-pipe.

- Criando classes: ng g class nome-da-classe.

- Criando interfaces: ng g interface nome-da-interface.

- Criando enumeradores: ng g enum nome-do-enum.

<h4>Aula 19</h4>

- Pré-processadores de CSS.

- Saas na criação do projeto: ng new nome-do-projeto --style=saas.

- Saas em projeto existente: ng set defaults.styleExt scss.

- Less na criação do projeto: ng new nome-do-projeto --style=less.

- Less em projeto existente: ng set defaults.styleExt less.

- Stylus na criação do projeto: ng new nome-do-projeto --style=stylus.

- Stylus em projeto existente: ng set defaults.styleExt styl.

<h4>Aula 20</h4>

- Inspecionando o código e analisando a aderência ao style guide do Angular: ng lint.

- Escrevendo testes nos arquivos .spec.ts e o Jasmine.

- Rodando os testes da aplicação: ng test. 

- Protractor e testes de integração (end-to-end): ng e2e.

<h4>Aula 21</h4>

- Conhecendo a estrutura de um projeto Angular 2.x/4.x.

<h4>Aula 22</h4>

- Gerando builds de produção e builds de desenvolvimento.

- ng build --dev: build de desenvolvimento, sem obfuscar e sem minificar o código (bom para debug).

- ng build --prod: build de produção, o código é todo obfuscado e minificado.

<h4>Aula 23</h4>

- Instalando o Bootstrap no projeto: npm install --save bootstrap@next.

- Salvando a instalação das libs no package.json: --save.

- Inserindo os paths para os arquivos das libs externas no angular-cli.json.

- Instalando o Materialize no projeto: npm install materialize-css --save | npm install angular2-materialize --save.

- Angular2-Materialize: https://www.npmjs.com/package/angular2-materialize.

- Instalando o lodash: npm install lodash --save.

- Instalando uma ponte entre o TypeScript e o lodash: npm install @types/lodash --save.

- Importando todos os utilitários do lodash: import * as _ from 'lodash'.


<h3>Módulo de Diretivas</h3>
<hr>
<h4>Aula 24</h4>

- Introdução ao uso de diretivas.

- Diretivas estruturais: utilizadas para modificar a estrutura do DOM e/ou código HTML - *ngIf, *ngFor.

- Diretivas de atributos: aquelas que interagem com o elemento em que foram aplicadas - ng-class, ng-style.

<h4>Aula 25</h4>

- Utilizando a diretiva *ngIf para exibir elementos no DOM.

- Utilizando [hidden] como alternativa ao *ngIf.

- *ngIf: mais indicada para exibir/ocultar grandes árvores de elementos. Cria ou destrói os elementos no DOM, o que pode ser prejudicial à performance da aplicação.

- [hidden]: mais indicada para exibir/ocultar pequenos elementos. Renderiza ambos elementos na tela, deixando-os apenas como visibilidade oculta.

- Para escolher entre *ngIf e [hidden] deve-se levar em conta o custo para renderizar os elementos na tela e também questões de segurança como o acesso ao conteúdo da aplicação por usuários que não tem o perfil apropriado, por exemplo.

<h4>Aula 26</h4>

- Aprendendo sobre a diretiva ngSwitch.

- Escutando o valor das variáveis via property bind: [ngSwitch]="variavel".

- Analisando os casos do switch: *ngSwitchCase="valorDaVariavelNesteCaso".

- Criando um caso padrão para o switch: *ngSwitchDefault.

<h4>Aula 27</h4>

- Iterando sobre arrays com a diretiva *ngFor.

- *ngFor="let variavelLocal of array".

- Utilizando "index" para recuperar os índices do array a ser iterado.

- *ngFor="let variavelLocal of array, let i = index".

<h4>Aula 28</h4>

- Compreendendo o uso do asterisco nas diretivas *ngIf, *ngFor, *ngSwitchCase e *ngSwitchDefault.

- A tag template.

- O atributo template.

<h4>Aula 29</h4>

- Class binding e diretiva ngClass.

- [class.nomeDaClasseASerAplicada]="expressao".

- [ngClass]="{'nomeDaClasseASerAplicada': expressao, ...}".

<h4>Aula 30</h4>

- Relembrando o style binding.

- Utilizando a diretiva ngStyle para mudar os estilos dos elementos.

- [ngStyle]="{'nomeDaPropriedadeASerModificada': expressao, ...}".

<h4>Aula 31</h4>

- Aprendendo a usar o operador Elvis: ?.

- objetoQuePodeSerNulo?.propriedadeDoObjeto.

<h4>Aula 32</h4>

- Injetando conteúdo em componentes com a tag ng-content.