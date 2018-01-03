import { Component } from '@angular/core';
import {ListItem} from "./shared/list/list.model";
import {DataService} from "./shared/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private title: string = 'CHAIN STORES FOR LUIS';
   public listItems: Array<ListItem>;

  constructor(private _dataService: DataService){
    this.listItems = this._dataService.getListItems();
  };
}
