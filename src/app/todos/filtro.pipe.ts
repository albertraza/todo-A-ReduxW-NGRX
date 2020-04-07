import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
	name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
	transform(todos: Todo[], filtro: filtrosValidos): unknown {
		switch (filtro) {
			case 'todos':
				return todos;
			case 'activos':
				return todos.filter(todo => todo.completado === false);
			case 'completados':
				return todos.filter(todo => todo.completado === true);
			default:
				return todos;
		}
	}
}
