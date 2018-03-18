import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {ProductService} from "./services/product.service";
import {CommonListComponent} from "./common-list/common-list.component";
import {ProductPipe} from "./common-list/product.pipe";
import {DataService} from "./services/data.service";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";

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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DataService,
        AuthService,
        AuthGuardService
      ]
    };
  }
}
