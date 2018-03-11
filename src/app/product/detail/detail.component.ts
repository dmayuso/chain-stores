import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListItem} from "../../shared/common-list/common-list.model";
import {DataService} from "../../shared/data.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private item: ListItem;

  constructor(private route: ActivatedRoute,
              private _dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let itemId = params['id'];
      if (itemId !== undefined) {
        this.item = this._dataService.getListItem(itemId);
      }
    });
  }

}
