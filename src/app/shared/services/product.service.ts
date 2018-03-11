import {Injectable} from '@angular/core';
import {ListItem} from "../common-list/common-list.model";
import {DataService} from "./data.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService{

  constructor(private dataService: DataService){}

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


  getListItems(): Observable<any> {
    return this.dataService.get('product');
  }

  getListItem(id: number): ListItem {
    return this.listItems.find((item) => item.id == id);
  }

  addListItem(listItem: ListItem): void{
    this.listItems.push(listItem);
  }
}
