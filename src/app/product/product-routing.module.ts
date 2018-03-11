import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ProductComponent} from "./product.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: ProductComponent,
        path: 'products',
        children: [
          { path: '', redirectTo: '/products/list', pathMatch: 'full' },
          { path: 'list', component: ListComponent },
          { path: 'list/:id', component: DetailComponent }
        ]
      }
    ])
  ],

  exports: [RouterModule]
})
export class ProductRoutingModule { }
