import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {ProductComponent} from "./product/product.component";
import {ProductRoutingModule} from "./product/product-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
