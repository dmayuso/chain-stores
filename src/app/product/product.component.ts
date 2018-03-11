import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";
import {ListItem} from "../shared/common-list/common-list.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public listItems: Array<ListItem>;

  constructor(private _dataService: DataService){
  }

  importData () {
    this.listItems = this._dataService.getListItems();
  }

  reverseList () {
    this.listItems.reverse();
  }

  ngOnInit() {
  }

}
