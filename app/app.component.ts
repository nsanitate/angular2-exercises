import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoList} from "./todo-list";
import {StatusSelector} from "./status-selector";

@Component({
  selector: 'my-app',
  directives: [TodoInput, TodoList, StatusSelector],
  template: `<div>
    <todo-input></todo-input>
    <status-selector (selected)="changeStatus($event)"></status-selector>
    <todo-list [status]="'started'"></todo-list>
  </div>`
})
export class AppComponent {
  status: string;

  changeStatus(status) {
    this.status = status;
  }
}