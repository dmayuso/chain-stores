import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from "./product-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent],
  exports: [RouterModule]
})
export class ProductModule { }
