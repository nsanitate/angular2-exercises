import {Component} from 'angular2/core';

import {TodoService} from "../services/todo-service";
import {TodoModel} from "../services/todo-model";

@Component({
  selector: 'todo-input',
  template: `<form (submit)="onSubmit(myInput)">
  <input type="text" #myInput autofocus>
  <button type="submit">Add</button>
  </form>`
})
export class TodoInput {
  constructor(public todoService: TodoService) {}

  onSubmit(input) {

    this.todoService.addTodo(new TodoModel(input.value));
    input.value = "";
    console.log(this.todoService.todos);
  }
}