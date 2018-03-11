import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {ListItem} from "../../shared/common-list/common-list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listItems: Array<ListItem>;

  constructor(private _dataService: ProductService,
              private router: Router){
  }

  importData () {
    this.listItems = this._dataService.getListItems();
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
