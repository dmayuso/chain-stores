import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {ProductTypeModel} from "../../shared/domain/product-type.model";
import {Product} from "../../shared/domain/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProductComponent implements OnInit {

  productTypes: Array<ProductTypeModel>;
  product: Product;

  constructor(private productService: ProductService,
              private router: Router) {
    this.product = new Product();
    this.productService.getListType().subscribe(data => {
      if(data) this.productTypes = data;
    })
  }

  ngOnInit() {
  }

  backToList() {
    this.router.navigate(['/products/list']);
  }

  saveProduct(){
    this.productService.saveProduct(this.product.model).subscribe((data) => {
     
    })
  }

}
