import {Injectable} from "angular2/core";

import {TodoModel} from "./todo-model";

@Injectable()
export class TodoService {
  todos = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("run")
  ];

  addTodo(todo) {
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo) {
    const i = this.todos.indexOf(todo);
    const status = todo.status == "started" ? "completed" : "started";
    const toggleTodo = Object.assign({}, todo, {status});

    this.todos = [
      ...this.todos.slice(0, i),
      toggleTodo,
      ...this.todos.slice(i + 1)
    ];
  }
}