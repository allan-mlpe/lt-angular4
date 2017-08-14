import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StyleBindComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InputPropertiesComponent,
    OutputPropertiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //para usar o ngModel em formulários é necessário importar este módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
