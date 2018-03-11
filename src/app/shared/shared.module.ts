import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {ProductService} from "./services/product.service";
import {CommonListComponent} from "./common-list/common-list.component";
import {ProductPipe} from "./common-list/product.pipe";
import {DataService} from "./services/data.service";

@NgModule({
  declarations: [
    HeaderComponent,
    CommonListComponent,
    ProductPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    CommonListComponent,
    ProductPipe
  ],
  providers: [DataService, ProductService]
})
export class SharedModule { }
