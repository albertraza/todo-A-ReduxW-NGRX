import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { TodoModule } from './todos/todo.module';

//NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { appReducers } from './app.reducer';
import { FiltroPipe } from './todos/filtro.pipe';

@NgModule({
	declarations: [ AppComponent, FooterComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		TodoModule,
		StoreModule.forRoot(appReducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		})
	],
	providers: [ FiltroPipe ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
