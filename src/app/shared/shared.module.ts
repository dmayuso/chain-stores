import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {DataService} from "./data.service";
import {ListComponent} from "./list/list.component";

@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    ListComponent
  ],
  providers: [DataService]
})
export class SharedModule { }
