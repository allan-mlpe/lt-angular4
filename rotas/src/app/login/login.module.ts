import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login.routing.module';
import { AuthService } from './auth.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    exports: [],
    providers: [
        AuthService
    ]
})
export class LoginModule {}