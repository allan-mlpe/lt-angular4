import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  deletarCiclo: boolean = false;

  valor: number = 5;

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  mudarValor() {
    this.valor++;
  }
}
