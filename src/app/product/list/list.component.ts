import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {ListItem} from "../../shared/common-list/common-list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listItems: Array<ListItem>;

  constructor(private productService: ProductService,
              private router: Router){
  }

  importData () {
    this.productService.getListItems().subscribe( (data) => {
      if(data) {
        this.listItems = data;
      }
    });
  }

  reverseList () {
    this.listItems.reverse();
  }

  clickOnProduct(id) {
    this.router.navigate(['/products/list/' + id]);
  }


  ngOnInit() {
  }

}
