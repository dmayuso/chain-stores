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

  createProductForm: FormGroup;
  @Input() productTypes: Array<ProductTypeModel>;
  @Input() product: ProductModel;

  constructor(private formBuilder: FormBuilder) {
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
