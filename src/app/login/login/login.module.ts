import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRouter} from "./login-routing.module";
import {AuthService} from "../../shared/services/auth.service";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRouter,
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class LoginModule {
}
