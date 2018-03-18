import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService{

  constructor(private dataService: DataService){}

  getListItems(): Observable<any> {
    return this.dataService.get('product');
  }

  getListItem(id: number):  Observable<any> {
    return this.dataService.get('product/' + id);
  }

}
