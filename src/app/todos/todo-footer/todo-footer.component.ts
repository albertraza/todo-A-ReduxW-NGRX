import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filtroActions from '../../filtro/filtro.actions';
import { filtrosValidos } from '../../filtro/filtro.actions';
import * as todoActions from '../todo.actions';

@Component({
	selector: 'app-todo-footer',
	templateUrl: './todo-footer.component.html',
	styleUrls: [ './todo-footer.component.scss' ]
})
export class TodoFooterComponent implements OnInit {
	filtroActual: filtroActions.filtrosValidos = 'todos';
	filtros: filtrosValidos[] = [ 'todos', 'completados', 'activos' ];

	pendientes: number;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store.subscribe(({ todos, filtro }) => {
			this.filtroActual = filtro;
			this.pendientes = todos.filter(s => s.completado === false).length;
		});
	}

	cambiarFiltro(filtro: filtroActions.filtrosValidos) {
		this.store.dispatch(filtroActions.filtrar({ filtro }));
	}

	limpiarCompletados() {
		this.store.dispatch(todoActions.limpiarCompletados());
	}
}
