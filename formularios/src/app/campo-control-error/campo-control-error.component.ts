import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-error',
  templateUrl: './campo-control-error.component.html',
  styleUrls: ['./campo-control-error.component.css']
})
export class CampoControlErrorComponent implements OnInit {

  @Input() showError: boolean;

  @Input() errorMsg: string;

  constructor() { }

  ngOnInit() {
  }

}
