import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {
	todos: Todo[] = [];
	filtroActual: filtrosValidos;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.getTodos();
	}

	private getTodos() {
		this.store.subscribe(({ todos, filtro }) => {
			this.todos = todos;
			this.filtroActual = filtro;
		});
	}
}
