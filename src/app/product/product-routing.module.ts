import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ProductComponent} from "./product.component";
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {AuthGuardService} from "../shared/services/auth-guard.service";
import {CreateProductComponent} from "./create/create.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        component: ProductComponent,
        path: 'products',
        canActivate: [
          AuthGuardService
        ],
        children: [
          {path: '', redirectTo: '/products/list', pathMatch: 'full'},
          {path: 'list', component: ListComponent},
          {path: 'list/:id', component: DetailComponent},
          {path: 'new', component: CreateProductComponent}
        ]
      }
    ])
  ],

  exports: [RouterModule]
})
export class ProductRoutingModule { }
