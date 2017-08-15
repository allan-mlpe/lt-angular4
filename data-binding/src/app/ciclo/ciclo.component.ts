import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log("run constructor");
   }

  ngOnInit() {
    this.log("run ngOnInit");
  }

  ngOnChanges() {
    this.log("run ngOnChanges");
  }

  ngDoCheck() {
    this.log("run ngDoCheck");
  }

  ngAfterContentInit() {
    this.log("run ngAfterContentInit");
  }

  ngAfterContentChecked() {
    this.log("run ngAfterContentChecked");
  }

  ngAfterViewInit() {
    this.log("run ngAfterViewInit");
  }

  ngAfterViewChecked() {
    this.log("run ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.log("run ngOnDestroy");
  }

  private log(hook: string) {
    console.log(hook);
  }
}
