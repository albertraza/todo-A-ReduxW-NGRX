import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
	selector: 'app-todo-add',
	templateUrl: './todo-add.component.html',
	styleUrls: [ './todo-add.component.scss' ]
})
export class TodoAddComponent implements OnInit {
	textoFc: FormControl = new FormControl('', [ Validators.required ]);

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {}

	agregar() {
		if (this.textoFc.invalid) {
			return;
		}

		this.store.dispatch(actions.crear({ texto: this.textoFc.value }));

		this.textoFc.reset();
	}
}
