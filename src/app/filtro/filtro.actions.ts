import { props, createAction } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'activos' | 'completados';

export const filtrar = createAction('[Filtro] Set Filtro', props<{ filtro: filtrosValidos }>());
