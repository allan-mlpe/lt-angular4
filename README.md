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

- import { FormsModule } from '@angular/forms' -> no respectivo módulo.

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

- Uso do conteúdo dessa aula no componente view-child.

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

<h4>Aula 33</h4>

- Criando diretivas customizadas: ng g d nomeDaDiretiva.

- Obtendo referências de elementos do DOM com a classe ElementRef do pacote '@angular/core'.

- Problemas de segurança na alteração do nativeElement via ElementRef.

- Usando a classe Renderer ('@angular/core') para alterar os elementos do DOM.

- Definindo que a diretiva seja aplicada apenas a elementos específicos alterando o seletor da diretiva.

- selector: 'p[nomeDaDiretiva]'.

- Diretiva: shared/fundo-amarelo.directive.ts.

<h4>Aula 34</h4>

- Escutando eventos no hospedeiro da diretiva: a classe HostListener do pacote @angular/core.

- @HostListener('nomeDoEvento') metodoASerExecutado() { ... }.

- Associando o valor de uma variável a um atributo/classe do hospedeiro da diretiva: a classe HostBinding do pacote @angular/core.

- Ex.: @HostBinding('style.backgroundColor') nomeDaVariavel.

- Ex2.: @HostBinding('style.backgroundColor') get setNomeDaVariavel() { ... }.

- Diretiva: shared/highlight-mouse.directive.ts.

<h4>Aula 35</h4>

- Criando diretivas com InputProperties.

- Usando lifecycle hooks em uma diretiva (ngOnInit).

- Diretiva: shared/highlight.

<h4>Aula 36</h4>

- Criando diretivas estruturais.

- Usando as classes TemplateRef e ViewContainerRef do pacote @angular/core.

- TemplateRef: faz referência ao template que possui a diretiva (tag template).

- ViewContainerRef: faz referência ao conteúdo a ser renderizado.

- Renderizando o conteúdo: this._viewContainerRef.createEmbeddedView(this._templateRef).

- Apagando o conteúdo: this._viewContainerRef.clear().

- Diretiva: shared/ng-else.


<h3>Módulo de Serviços</h3>
<hr>
<h4>Aula 37</h4>

- Introdução ao uso dos serviços.

- DRY: don't repeat yourself.

<h4>Aula 38</h4>

- Criando uma classe de serviço manualmente.

- Importando a classe criada no componente.

- Usando o método ngOnInit para carregar dados na inicialização do componente.

<h4>Aula 39</h4>

- Usando a injeção de dependência do Angular.

- Definindo que uma classe e injetável: a anotação @Injectable().

- Declarando serviços nos providers do app.module para disponibilizá-los para toda aplicação.

<h4>Aula 40</h4>

- Compreendendo o escopo dos serviços.

- Expondo serviços no metadado providers dos módulos do Angular.

- No Angular, os serviços utilizam o padrão singleton, ou seja, o serviço é instanciado apenas uma vez, independente de quantos componentes e/ou módulos utilizem-o.

- Criando módulos de funcionalidades: CommonModule do pacote @angular/common.

- Expondo componentes para outros módulos: o metadado exports.

- Criando múltiplas instâncias de um serviço: declarando providers em componentes específicos.

<h4>Aula 41</h4>

- Comunicação entre componentes utilizando serviços.

- Utilizando o EventEmitter para broadcast de eventos.

- Escutando eventos/modificações de um EventEmitter: eventEmitterObj.subscribe(function... );

- Compartilhando variáveis entre instâncias diferentes de um mesmo serviço: o uso de atributos estáticos.

<h4>Aula 42</h4>

- Criando serviços com o Angular CLI: ng g s nomeDoServico.

- Injetando um serviço como dependência de outro serviço.


<h3>Módulo de Pipes</h3>
<hr>
<h4>Aula 43</h4>

- Aprendendo a utilizar pipes.

- Maiúsculas e minúsculas: uppercase e lowercase.

- Editando números decimais: number:'1.2-2' (neste exemplo informamos primeiro o número de casas à esquerda e depois o número mínimo e máximo de casas após a vírgula).

- Trabalhando com moedas: currency:'BRL':true (neste exemplo informamos que queremos o padrão de moeda do Brasil e o 'true' informa que o símbolo da moeda deve ser utilizado).

- Formatando datas: date:'dd/MM/yyyy'.

- Exibindo objetos em formato JSON: json.

<h4>Aula 44</h4>

- Criando um pipe customizado.

- ng g pipe nome-do-pipe (ng g p nome-do-pipe).

<h4>Aula 45</h4>

- Adicionando o Locale em pipes.

- A constante LOCALE_ID do pacote @angular/core.

- { provide: LOCALE_ID, useValue: 'pt-BR' }.

- Utilizando um serviço para importar configurações de locale: { provide: LOCALE_ID, deps: [NomeDoServico], useFactory: variavel => variavel.metodo() }.

<h4>Aula 46</h4>

- Pipes puros: pipes que não monitoram modificações no objeto ao qual são aplicados.

- Passando argumentos para um filtro puro: nomeDoFiltro:nomeDoParametro.

<h4>Aula 47</h4>

- Pipes impuros: monitorando as alterações nos objetos.

- O metadado 'pure' da anotação @Pipe.

- pure: false -> para pipes impuros.

- Construindo um filtro de arrays utilizando boas práticas (sem filtros, por questões de desempenho).

<h4>Aula 48</h4>

- Aplicando pipes em dados que demoram a estar disponíveis: o pipe async.

<h3>Módulo de Rotas</h3>
<hr>
<h4>Aula 49</h4>

- Introduzindo o conceito de Single Page Applications (SPA) e roteamento no Angular.

<h4>Aula 50</h4>

- Criando rotas básicas.

- As classes Routes e RouterModule do pacote @angular/router.

- const obj: Routes = [ {path: 'pathParaComponent', component: ExemploComponent}, ... ].

- A classe ModuleWithProviders do pacote @angular/core.

- RouterModule.forRoot: declaração das rotas principais (raízes) da aplicação. Ex.: /home, /login, etc.

- RouterModule.forChild: declaração de rotas de funcionalidades da aplicação. Ex.: /cursos/angular, /usuario/admin/2, etc.

- export const OBJ: ModuleWithProviders = RouterModule.forRoot(routesObt).

- A tag router-outlet: habilitando o roteamento no app-component.

<h4>Aula 51</h4>

- Definindo rotas a nível de código: a diretiva routerLink.

- routerLink="pathDoLink".

<h4>Aula 52</h4>

- Aplicando CSS em rotas ativas: a diretiva routerLinkActive.

- routerLinkActive="nomeDaClasseASerAplicada".

<h4>Aula 53</h4>

- Passando parâmetros para rotas no Angular.

- Utilizando o routerLink com property binding: [routerLink]="['pathDaRota', valorDoParametro]".

- Capturando o valor de parâmetros utilizando a classe ActivatedRoute do pacote @angular/router.

- objActivatedRoute.snapshot.params['nomeDoParam'].

- Usamos o ActivatedRoute para obter parâmetros das rotas.

<h4>Aula 54</h4>

- Escutando mudanças nos parâmetros da URL.

- Utilizando a classe Subscription do pacote rxjs/Rx.

- Obtendo os parÂmetros de um objeto ActivatedRoute: obj.params.

- Cancelando inscrições após destruir o componente: objSubscription.unsubscribe().

<h4>Aula 55</h4>

- Criando links imperativos com o ngFor.

- Redirecionando a aplicação utilizando o método navigate da classe Router.

- objRouter.navigate(['pathDeRedirecionamento']).

- Usamos o Router para alterar parâmetros das rotas.

<h4>Aula 56</h4>

- Passando e extraindo query params para/de rotas.

- A diretiva queryParams: [queryParams]="{nomeParametro: valorParametro}".

- Obtendo os query params de um objeto ActivatedRoute: obj.queryParams.

- Alterando queryParams com o objeto Router.

- objRouter.navigate(['pathParaRota'], { queryParams: { chave: valor } }).

<h4>Aula 57</h4>

- Criando um módulo de rotas: app.routing.module.ts.

<h4>Aula 58</h4>

- Refatorando o código e preparando o projeto para crescer: criando módulos de funcionalidade.

- Não utilizamos o BrowserModule em módulos de funcionalidades, apenas no AppModule. Para módulos de funcionalidades, utilizamos o CommonModule.

- Só declaramos um componente no metadato exports quando o mesmo for ser usado diretamente em outro módulo.

<h4>Aula 59</h4>

- Refatorando o código: criando um módulo de rotas para um módulo de funcionalidade.

- Importando rotas de módulo de funcionalidade: RouterModule.forChild(rotasDeFuncionalidade).

<h4>Aula 60</h4>

- Para evitar conflitos de rotas, devemos declarar as rotas estáticas antes de rotas similares que recebam parâmetros.

- Criando rotas filhas: { path: "pathPai", component: PaiComponent, children: [ { path: "pathFilho", component: FilhoComponent  }, ... ] }.

- O uso de rotas filhas permite que 2 ou mais componentes sejam renderizados na tela simultâneamente.

- Importante: é necessário declarar a tag router-outlet no componente "base" que possui as rotas filhas, para que o mesmo possa renderizá-las de acordo com a URL no browser.

<h4>Aula 61</h4>

- Construindo as telas da aplicação.

- Criando um layout com exibição lado a lado com o Materialize.

- Criação de formulários que serão auto-preenchidos com valores vindo do serviço de alunos.

- Correção de bug nos inputs auto-preenchidos do materialize.

<h4>Aula 62</h4>

- Utilizando o conceito de lazy loading para melhorar o desempenho da aplicação.

- 1º passo: declarar rota base do módulo + caminho completo para classe módulo no AppRoutingModule.

- Ex.: { path: 'pathBaseParaModulo', loadChildren: 'app/funcionalidade/modulo-funcionalidade.module#ModuloFuncionalidadeModule' }.

- Excluir todas as referências de imports dos módulos de funcionalidades que serão carregados sob demanda de todos os outros lugares da aplicação que não o AppRouting (ver app.module.ts).

- Remover a rota base declarada no AppRouting do módulo de routing da funcionalidade (ver alunos.routing.module.ts e cursos.routing.module.ts).

<h4>Aula 63</h4>

- Exercitando a criação de módulos de funcionalidade: o módulo de login.

- Criando um serviço simples de autenticação.

- Emitindo eventos em um serviço com o EventEmitter: usuarioLogado.

- Escutando os eventos emitidos pelo serviço: this.nomeDoServico.nomeDoEventEmitter.subscribe().

- Mostrando/exibindo elementos caso o usuário esteja logado no sistema.

<h4>Aula 64</h4>

- Permitindo/negando o acesso de usuários às rotas da aplicação: as guardas de rotas.

- Checando algo ANTES de um componente ser usado: a interface CanActivate do pacote @angular/router.

- Declarando a guarda de rotas no app.routing.module.ts: { path: 'pathDaRota', loadChildren: 'caminhoDoArquivoDeRotas#ArquivoDeRotas', canActivate: [GuardaDeRota]}.

- A guarda de rota também deve ser declarada no metadado providers do app.module.

<h4>Aula 65</h4>

- Criação de guarda de rotas filhas: a interface CanActivateChild do pacote @angular/router.

- { path: 'pathDaRota', loadChildren: 'caminhoDoArquivoDeRotas#ArquivoDeRotas', canActivate: [GuardaDeRota], canActivateChild: [GuardaDeRotaFilha]}.

- Obtendo parâmetros e outras informações da URL: ActivateRouteSnapshot e RouterStateSnapshot.

- Bloqueando o acesso à uma rota específica de acordo com as permissões do usuário.

- Refactoring: incluindo as guardas de rotas filhas nos módulos de funcionalidade (alunos.module e alunos.routing.module).

<h4>Aula 66</h4>

- Guarda de rota executada ao sair de uma rota específica: CanDeactivate.

- As guardas do tipo CanDeactivate são úteis quando um usuário edita um formulário e tenda sair sem salvar as alterações, por exemplo. Neste caso, a guarda podemos desenvolver alguma lógica a ser executada quando o usuário tenta deixar a rota.

- Declarando uma rota do tipo canActivate em um arquivo de roteamento: { path: ..., component: ..., canDeactivate: [GuardaQueImplementaCanDeactivate] }.

<h4>Aula 67</h4>

- Tornando a guarda de rotas de desativação mais genérica: criando interface com método a ser implementado por componentes.

- A interface criada deve ser passada como o tipo na guarda de que implementa CanDeactivate.

- Os componentes que forem usar a guarda genérica devem implementar a interface criada e o(s) seu(s) método(s).

<h4>Aula 68</h4>

- Carregando dados antes da rota ser ativada: a interface Resolve.

- Atalho para criar um Resolver com a ajuda da IDE (Visual Studio Code): angResolveFull/angResolveSimple.

- Declarando o resolver na configuração de rotas: { path: ..., component: ..., resolve: { nomeDoDaDo : NomeDoResolver } } -> ver arquivo [alunos.routing.module.ts](rotas/src/app/alunos/alunos.routing.module.ts).

- Também devemos declarar o Resolver criado nos providers do módulo em questão.

- Recuperando dados vindo do resolver: this.objActivatedRoute.data.subscribe( (info) => info['nomeDoDado'] ) -> ver arquivo [aluno-detalhe.component.ts](rotas/src/app/alunos/aluno-detalhe/aluno-detalhe.component.ts).

<h4>Aula 69</h4>

- Impedindo que o código (ou bundles) da aplicação sejam baixados quando o usuário não está logado: a interface CanLoad do pacote @angular/router.

- Reaproveitando uma guarda já criada para implementar a interface CanLoad ver [auth-guard.ts](rotas/src/app/guards/auth-guard.ts).

<h4>Aula 70</h4>

- Configurando o app.routing.module para tratar rotas inexistentes: incluindo um componente de página não encontrada.

- Devemos declarar a rota de path = '**' por último, uma vez que ela irá tratar qualquer rota que não fora definida antes.

- Ex.: const appRoutes: Routes [ { path: 'path1' ...}, ..., { path: '**', component: PaginaNaoEncontradaComponent }].

- Fazendo redirecionamento de rotas no app.routing.module.

- Ex. de redirecionamento: { path: 'path1', redirectTo: 'path2', pathMatch: 'full'}.

- A definição do pathMatch acima é OBRIGATÓRIA e pode receber os valores 'full' (para validação da rota inteira, geralmente usada nas rotas de root da aplicação) ou 'prefix' (para fazer verificações em prefixo da rota, geralmente usada em rotas filhas).

- Utilizando a propriedade routerLinkActivateOptions para aplicar a classe CSS de rota ativa apenas quando a rota obedecer exatamente o padrão definido no routerLink (ver [app.component.html](rotas/src/app/app.component.html)).

<h4>Aula 71</h4>

- Fazendo distinção de rotas do Angular e de endpoints do back-end: utilizando a hash '#' nas rotas do projeto.

- Configuração: NgModule({ imports: [RouterModule.forRoot(appRoutes, { useHash: true })] }).

- Ver: [app.routing.module.ts](rotas/src/app/app.routing.module.ts).

<h3>Módulo de Formulários</h3>
<hr>
<h4>Aula 72</h4>

- Formulários Template Driven
  - Formulário criado e configurado no próprio HTML.
  - Validações são feitas no template HTML (tamanho mínimo e tamanho máximo do campo, regex, etc).
  - Angular cria/deduz o FormGroup.
  - Valores do formulário são submetidos com o ngSubmit.
  - Precisamos criar uma variável local e passá-la para o ngSubmit.

- Formulários Data Driven (Reativos)
  - Formulário criado e configurado no componente (o template terá apenas a estrutura básica do formulário).
  - Consequentemente, as validações são feitas no próprio componente.
  - O Angular cria o FormGroup criado no componente.
  - Não é necessário utilizar o ngSubmit, uma vez que a referência ao formulário já está no componente.
  - Podemos usar o evento de clique para realizar a submissão do formulário, por exemplo.

<h4>Aula 73</h4>

- Criando um projeto já com o módulo de rotas: ng new nome-do-projeto --routing.

- Instalando o [ngx-bootstrap](https://valor-software.com/ngx-bootstrap): npm install ngx-bootstrap --save.

- Instalando o Bootstrap 3 no projeto: npm install bootstrap@3 --save.

- Criando os componentes do projeto.

- Configurando as rotas da aplicação.

- Construindo o primeiro formulário Template Driven.

<h4>Aula 74</h4>

- Atribuindo uma variável local à diretiva ngForm: #variavel='ngForm'.

- Escutando o evento de submissão de formulário: (ngSubmit)="funcaoQueSeraExecutada()".

- Para fazer o Angular inferir os valores do formulário devemos utilizar o atribute name do HTML5.

- Ex.: "input type="text" ... name="nomeParaOCampo" ngModel ...".

<h4>Aula 75</h4>

- Preenchendo os dados no formulário com dados pré-definidos: utilizando two-way data binding.

- Ex.: [(ngModel)]="obj.propriedade".

- Podemos usar o ngModel apenas para fazer o preenchimento inicial, sem modificar os valores do objeto 'original' em caso de edição do formulário. Para isso utilizamos apenas o property binding.

- Ex.: [ngModel]="obj.propriedade" ~> isso vai trazer o campo preenchido, mas em caso de edição pelo usuário, os valores do objeto 'obj' não serão alterados.

<h4>Aula 76</h4>

- Alertas para a importação do módulo FormsModule para aplicações com diversos módulos.

- Refatorando a aplicação com a criação do módulo TemplateFormModule.

<h4>Aula 77</h4>

- Validação de campos (validadores do HTML5 e do Angular).

- Para validar emails no Angular 4, podemos utilizar simplesmente a diretiva 'email' no input correspondente.

- Caso o Angular seja utilizado na versão 2, podemos usar a diretiva pattern, acompanhada de um padrão de expressão regular.

- Ex.: pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?".

<h4>Aula 78</h4>

- Aplicando CSS na validação dos campos.

- Estado dos campos de formulário no Angular:
  - Controle visitado (campo recebeu foco e depois perdeu): ng-touched (sim), ng-untouched (não).
  - Mudança de valor: ng-dirty (sim), ng-pristine (não).
  - Controle válido: ng-valid (sim), ng-invalid (não).

<h4>Aula 79</h4>

- Analisando a propriedade control do objeto NgForm para obter informações acerca dos campos do formulário: dirty, touched, valid, pristine, pendind, invalid, untouched, etc.

- Para que variáveis locais estejam visíveis em todo o escopo do template, devemos atribuí-las ao ngModel: #nomeDaVariavelLocal="ngModel".

- Utilizando classes de validação de formulários do Bootstrap.

<h4>Aula 80</h4>

- Desabilitando o botão de submissão do formulário caso haja campos inválidos.

- Verificando a propriedade 'valid' do objeto NgForm.

- Utilizando o property binding para a atributo disabled do botão: [disabled]="expressao".

<h4>Aula 81</h4>

- Criando um componente para debugar o nosso formulário.

<h4>Aula 82</h4>

- Incrementando o formulário Template Driven.

- Usando a classe form-horizontal do Bootstrap.

- Utilizado campos de somente leitura: o atributo readonly do HTML5.

<h4>Aula 83</h4>

- Refatoração do formulário criado até então para facilitar a manutenção.

- Criação de métodos para aplicar classes de erro do Bootstrap de campos inválidos.

- Criação de componente para encapsular mensagens de erro/feedback para o usuário.

<h4>Aula 84</h4>

- Agrupando dados em formulários Template Driven: a diretiva ngModelGroup.

- Sintaxe: ngModelGroup="nomeParaObjeto".

- Utilizando o ngModelGroup nós podemos ter objetos aninhados dentro dos valores do formulário conforme a necessidade.

<h4>Aula 85</h4>

- Utilizando um web service para buscar um endereço dado o CEP do usuário.

- Webservice base: [ViaCEP](https://viacep.com.br).

- Injetando um objeto da classe Http do pacote @angular/http.

- OBS: evemos importar o HttpModule no módulo que irá utilizar o objeto Http.

- Importando o operador map: import 'rxjs/add/operator/map'.

- Modelo de requisição: httpObj.get('urlDoServico').map(dados => dados.json().subscribe(dados => ...)).

- Utilizando o template literal da ES2005 para evitar concatenação de strings: `qualquerTexto${variavel}qualquer outra coisa`.

<h4>Aula 86</h4>

- Populando os campos do formulário com o setValue do objeto NgForm.

- Quando utilizamos o setValue devemos passar o objeto que representa o formulário inteiro, ou seja, um objeto contendo todos os campos do formulário.

- Populando os campos do formulário com o patchValue do objeto FormGroup. Neste caso, é dispensável o uso de um objeto contendo todos os campos do formulários. Podemos passar objetos apenas com os campos que queremos popular/atualizar.

- Podemos acessar o atributo form (do tipo FormGroup) do objeto NgForm.

- Utilizando o objeto FormGroup podemos popular/resetar apenas campos específicos do formulário, dispensando a necessidade de passar um objeto com todos os campos do formulário.

<h4>Aula 87</h4>

- Emulando a submissão de dados para o servidor com o HTTP POST.

- Utilizando o objeto http para fazer uma requisição POST: httpObj.post('urlDoServico', JSON.stringfy(dados)).map(...).subscribe(...).

- Testando as requisições com a plataforma [REST Test Test](https://resttesttest.com).

<h4>Aula 88</h4>

- Introdução aos formulários reativos: criando formulários programaticamente.

- Nos formulários reativos a maior parte do código estará dentro do componente (código TypeScript) e não dentro do template (código HTML).

<h4>Aula 89</h4>

- Configurando módulos e componentes para trabalhar com formulários reativos.

- Utilizando a classe FormGroup do pacote @angular/forms para representar o formulário.

- Para trabalhar com formulários reativos precisamos importar o módulo: ReactiveFormsModule do pacote @angular/forms.

<h4>Aula 90</h4>

- Criando formulários reativos com o FormGroup e com FormBuilder, ambos do pacote @angular/forms.

- Sintaxe com FormGroup: new FormGroup({ nomeDoCampo: new FormControl(valorInicialDoCampo), ... }).

- Sintaxe com FormControl: variavelDoFormBuilder.group({ nomeDoCampo: [valorInicialDoCampo, ...], ... }).

<h4>Aula 91</h4>

- Sincronizando os dados entre o template e o componente.

- Mapeando o objeto FormGroup do componente para o template: a diretiva formGroup.

- Ex.: [formGroup]="objFormGroup".

- Atualizando os campos no template e no componente: o atributo formControlName.

- Obs: no template devemos trocar os atributos 'name' por 'formControlName'.

- Ex.: formControlName="nomeDoCampoDoFormGroup".

<h4>Aula 92</h4>

- Fazendo a submissão de formulários reativos.

- Ex.: httpObj.post('urlDoServico', JSON.stringfy(dados)).map(...).subscribe(...).

<h4>Aula 93</h4>

- Resetando um formulário: objFormGroup.reset().

- Tratando erros na submissão do formulário: httpObj.post('urlDoServico', JSON.stringfy(dados)).map(...).subscribe(..., (error) => { //tratamento do erro }).

<h4>Aula 94</h4>

- Validando campos de formulário data driven a nível de código.

- Utilizando a classe Validators do pacote @angular/core.

- A classe Validators possui diversos tipos de validação: Validators.required, Validators.minLenght(numeroQualquer), Validators.maxLength(numeroQualquer), Validators.pattern(regex), Validators.email, etc.

- Declaração de um validator: FormBuilder.group( { nomeDoCampo: valorInicial, [Validators.required, Validators.email, ...] } ).

- Podemos verificar em qual validação um dado campo falhou acessando a propriedade errors do objeto FormControl: objFormControl.errors. Outra alternativa seria via o objeto FormGroup: objFormGroup.controls.nomeDoCampo.errors.

<h4>Aula 95</h4>

- Aplicando CSS na validação dos campos do formulário.

- Acessando variáveis do componente do formulário data driven diretamente pelo template.

<h4>Aula 96</h4>

- Migrando um formulário template driven para data driven: incluindo os campos do endereço no formulário data driven.

<h4>Aula 97</h4>

- Aninhando objetos FormGroup.

- Ex.1: new FormGroup( ..., nomeFormGroup: new FormGroup({ campo: new FormControl(null), ... }) }). 

- Ex.2: variavelDoFormBuilder.group(..., nomeFormGroup: variavelDoFormBuilder.group({ nomeDoCampo: [valorInicialDoCampo, ...] }) }).

- Para referenciar FormGroup aninhados no template HTML, devemos usar o atributo formGroupName: formGroupName="nomeDoAtributoAninhado" (e dentro deste elemento inserimos os campos do grupo com o formControlName).

<h4>Aula 98</h4>

- Consumindo o serviço do CEP no formulário data driven.

- Chamando funções quando da ocorrência de um evento: (blur)="algumaFuncao()".

- Populando os dados do formulário com os dados retornados pelo web service.

<h4>Aula 99</h4>

- Validando campos de um formulário na submissão.

- Definindo que um dado campo está "sujo" ou que foi "tocado": objFormControl.markAsDirty() ou objFormControl.markAsTouched().

- Iterando sobre as chaves de um objeto: aprendendo sobre a função Object.keys.

<h4>Aula 100</h4>

- Criando um serviço de para retornar informações dos estados brasileiros.

- Criação de interface para rerpresentar um estado.

- Inclusão de arquivo JSON no diretório assets do projeto. Ao compilar o projeto de produção, tudo que estiver no diretório assets será copiado para o build de produção.

- Retornando conteúdo de arquivo JSON do projeto por meio de um serviço via HTTP GET.

- O objeto Response do pacote @angular/http (importando o Response não precisamos importar o operador map do pacote rxjs).

- Retornando um Observable em um serviço: return this.httpObj.get('urlDoServico').map((dados => dados.json()).

- Obtendo o conteúdo de um Observable em um componente: objObservable().subscribe( //lógica com dados retornados ).
