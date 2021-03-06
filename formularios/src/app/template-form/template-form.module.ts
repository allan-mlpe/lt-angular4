import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        SharedModule
    ],
    declarations: [
        TemplateFormComponent,
    ],
    providers: []
})
export class TemplateFormModule {}