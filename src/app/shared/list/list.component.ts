import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListItem} from "./list.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input() listItems : Array<ListItem>;
  @Output() reverseList: EventEmitter<void> = new EventEmitter<void>();

  emitEvent(){
    this.reverseList.emit();
  }
}

