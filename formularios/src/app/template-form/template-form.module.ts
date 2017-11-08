import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule, //import do módulo Http
        SharedModule
    ],
    declarations: [
        TemplateFormComponent,
    ],
    providers: []
})
export class TemplateFormModule {}