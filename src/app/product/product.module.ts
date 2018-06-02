import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from "./product-routing.module";
import {RouterModule} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {SharedModule} from "../shared/shared.module";
import { DetailComponent } from './detail/detail.component';
import { ProductFormComponent } from './shared/product-form/product-form.component';
import { CreateProductComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ListComponent,
    DetailComponent,
    ProductFormComponent,
    CreateProductComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ProductModule { }
