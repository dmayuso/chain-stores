import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ProductComponent} from "./product.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: ProductComponent,
        path: 'products'
      }
    ])
  ],

  exports: [RouterModule]
})
export class ProductRoutingModule { }
