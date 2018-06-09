import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Observable} from "rxjs/Observable";
import {ProductModel} from "../domain/product.model";

@Injectable()
export class ProductService{

  constructor(private dataService: DataService){}

  getListItems(): Observable<any> {
    return this.dataService.get('product');
  }

  getListItem(id: number):  Observable<any> {
    return this.dataService.get('product/' + id);
  }

  getListType(): Observable<any> {
    return this.dataService.get('type');
  }

  saveProduct(product: ProductModel): Observable<any> {
    return this.dataService.post('product', product);
  }

}
