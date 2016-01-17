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
    todo.toggle();

    var i = this.todos.indexOf(todo);

    this.todos = [
      ...this.todos.slice(0, i),
      todo,
      ...this.todos.slice(i + 1)
    ];
  }
}