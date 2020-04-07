import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { reducer } from './todos/todo.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
	todos: Todo[];
	filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
	todos: reducer,
	filtro: filtroReducer
};
