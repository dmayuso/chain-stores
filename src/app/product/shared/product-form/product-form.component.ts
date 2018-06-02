import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../shared/domain/product.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  createProductForm: FormGroup;
  product: Product;
  productTypes: Array<any>;

  constructor(private formBuilder: FormBuilder) {
    this.product = new Product();
    this.buildForm();
  }

  buildForm() {
    this.createProductForm = this.formBuilder.group({
      productId: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
