import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DataFormComponent } from './data-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    DataFormComponent
  ]
})
export class DataFormModule { }
