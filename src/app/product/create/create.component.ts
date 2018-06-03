import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {ProductTypeModel} from "../../shared/domain/product-type.model";
import {Product} from "../../shared/domain/product.model";

@Component({
  selector: 'app-create-product',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProductComponent implements OnInit {

  productTypes: Array<ProductTypeModel>;
  product: Product;

  constructor(private productService: ProductService) {
    this.product = new Product();
    this.productService.getListType().subscribe(data => {
      if(data) this.productTypes = data;
    })
  }

  ngOnInit() {
  }

}
