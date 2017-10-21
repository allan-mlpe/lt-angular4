/**
 * Interface que representa uma guarda de rotas com
 * canDeactivate para ser reutilizada por diversos
 * componentes da aplicação, para impedir que para
 * cada componente seja desenvolvida uma nova guarda
 * de desativação.
 */
export interface IFormCanDeactivate {

    podeDesativar();
}