import {Injectable} from '@angular/core';
import {ListItem} from "./common-list/common-list.model";

@Injectable()
export class DataService{

  private listItems: Array<ListItem> = [
    {
      id: 1,
      description: 'TV'
    },
    {
      id: 2,
      description: 'PHONE'
    },
    {
      id: 3,
      description: 'ELECTRO'
    }
  ];

  contructor(){

  }

  getListItems(): Array<ListItem> {
    return this.listItems;
  }

  getListItem(id: number): ListItem {
    return this.getListItems().find((item) => item.id == id);
  }

  addListItem(listItem: ListItem): void{
    this.listItems.push(listItem);
  }
}
