import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/data.service";
import {ListItem} from "../../shared/common-list/common-list.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
