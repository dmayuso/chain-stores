import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {ProductModel} from "../../shared/domain/product.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private product: ProductModel = {} as ProductModel;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private _dataService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let itemId = params['id'];
      if (itemId !== undefined) {
        this._dataService.getListItem(itemId).subscribe((data) => {
          if(data) {
            this.product = data;
          }
        });
      }
    });
  }

  backToList() {
    this.router.navigate(['/products/list']);
  }

}
