import {Component} from 'angular2/core';

import {TodoService} from "../services/todo-service";
import {TodoModel} from "../services/todo-model";

@Component({
  selector: 'todo-input',
  template: `<form (submit)="onSubmit(myInput.value)">
  <input type="text" #myInput>
  <button type="submit">Add</button>
  </form>`
})
export class TodoInput {
  constructor(public todoService: TodoService) {}

  onSubmit(value) {

    this.todoService.addTodo(new TodoModel(value));
    console.log(this.todoService.todos);
  }
}