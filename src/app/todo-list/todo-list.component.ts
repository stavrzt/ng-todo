import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../services/todo-data.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    providers: [TodoDataService]
})
export class TodoListComponent implements OnInit {
    todos;
    sortParameter = 'id';

    constructor(private _todoData: TodoDataService) {
    }

    ngOnInit() {
        this.todos = this._todoData.getLocalStorageData();
    }

    addTodo(todoText) {
        if (todoText) {
            this.todos.push({
                id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
                text: todoText,
            });
        }
        TodoDataService.setLocalStorageData(this.todos);
        console.log(`Added todo "${todoText}"`, this.todos);
    }

    removeTodo(todoText) {
        this.todos = this.todos.filter(todo => todo.text !== todoText);
        TodoDataService.setLocalStorageData(this.todos);
        console.log(`Removed todo "${todoText}"`, this.todos);
    }

}
