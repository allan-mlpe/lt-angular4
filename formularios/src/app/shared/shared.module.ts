import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CampoControlErrorComponent,
    FormDebugComponent
  ],
  exports: [
    CampoControlErrorComponent,
    FormDebugComponent
  ],
  providers: [ DropdownService ]
})
export class SharedModule { }
