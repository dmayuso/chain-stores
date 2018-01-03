import { Component } from '@angular/core';
import {ListItem} from "./shared/list/list.model";
import {DataService} from "./shared/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private title: string = 'chain stores for luis';
   public listItems: Array<ListItem>;

  constructor(private _dataService: DataService){ };

  importData () {
    this.listItems = this._dataService.getListItems();
  }

  reverseList () {
    this.listItems.reverse();
  }
}
