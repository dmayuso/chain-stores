import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductModel} from "../../../shared/domain/product.model";
import {ProductTypeModel} from "../../../shared/domain/product-type.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  @Input() productTypes: Array<ProductTypeModel>;
  @Input() product: ProductModel = {} as ProductModel;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.productForm = this.formBuilder.group({
      productId: [this.product.id, Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
