import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(id: string){
    return 'Product ' + id;
  }
}
