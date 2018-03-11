import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListItem} from "./common-list.model";

@Component({
  selector: 'common-list',
  templateUrl: './common-list.component.html',
  styleUrls: ['./common-list.component.css']
})
export class CommonListComponent{

  @Input() listItems : Array<ListItem>;
  @Output() reverseList: EventEmitter<void> = new EventEmitter<void>();

  emitEvent(){
    this.reverseList.emit();
  }
}

