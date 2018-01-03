import {Injectable} from '@angular/core';
import {ListItem} from "./list/list.model";

@Injectable()
export class DataService{

  private listItems: Array<ListItem> = [
    {
      id: '1',
      description: 'Nintendo Switch'
    },
    {
      id: '2',
      description: 'Play Station 4 pro'
    },
    {
      id: '3',
      description: 'XBox'
    }
  ];

  contructor(){

  }

  getListItems(): Array<ListItem> {
    return this.listItems;
  }

  addListItem(listItem: ListItem): void{
    this.listItems.push(listItem);
  }
}
