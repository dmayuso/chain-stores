import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRouter} from "./login-routing.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRouter
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
