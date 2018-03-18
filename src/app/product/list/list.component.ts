import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {ListItem} from "../../shared/common-list/common-list.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthState} from "../../shared/reducers/auth.state";
import * as authReducer from '../../shared/reducers/auth.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listItems: Array<ListItem>;

  constructor(private productService: ProductService,
              private router: Router,
              private authStore: Store<AuthState>){

      this.authStore.select(authReducer.getAuthUser).subscribe((user) => {
        this.importData();
      });

  }

  importData () {
    this.productService.getListItems().subscribe( (data) => {
      if(data) {
        this.listItems = data;
      }
    });
  }

  reverseList () {
    this.listItems.reverse();
  }

  clickOnProduct(id) {
    this.router.navigate(['/products/list/' + id]);
  }


  ngOnInit() {
  }

}
