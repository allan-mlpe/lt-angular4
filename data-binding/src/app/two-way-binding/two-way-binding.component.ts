import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  private nome: string = "abc";

  private pessoa: any = {
    nome : "user",
    idade : "0",
    curso : {
      tipo : "any",
      nome : "course"
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
