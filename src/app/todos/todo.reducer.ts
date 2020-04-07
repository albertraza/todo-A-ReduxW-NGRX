import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletados } from './todo.actions';

const initialState: Todo[] = [ new Todo('first'), new Todo('second'), new Todo('third'), new Todo('fourth') ];

const _reducer = createReducer(
	initialState,
	on(crear, (state, { texto }) => [ ...state, new Todo(texto) ]),
	on(toggle, (state, { id }) => {
		return state.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					completado: !todo.completado
				};
			} else {
				return todo;
			}
		});
	}),
	on(editar, (state, { id, texto }) => {
		return state.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					texto
				};
			} else {
				return todo;
			}
		});
	}),
	on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
	on(toggleAll, state =>
		state.map(todo => {
			return { ...todo, completado: !todo.completado };
		})
	),
	on(limpiarCompletados, state =>
		state.map(todo => {
			return { ...todo, completado: false };
		})
	)
);

export function reducer(state: Todo[], action: Action) {
	return _reducer(state, action);
}
