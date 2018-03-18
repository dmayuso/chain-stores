import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from './product/product.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from "./login/login/login.module";
import {AuthService} from "./shared/services/auth.service";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./shared/reducers/reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    LoginModule,
    ProductModule,
    SharedModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
