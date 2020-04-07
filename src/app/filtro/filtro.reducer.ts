import { filtrosValidos, filtrar } from './filtro.actions';
import { on, Action, createReducer } from '@ngrx/store';

const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(initialState, on(filtrar, (state, { filtro }) => filtro));

export function filtroReducer(state, action: Action) {
	return _filtroReducer(state, action);
}
