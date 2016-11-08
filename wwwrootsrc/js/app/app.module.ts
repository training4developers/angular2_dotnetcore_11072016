import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import '../../css/styles.scss';

import { AppComponent, AppHeaderComponent, ColorListComponent,
	ColorFormComponent, ColorItemComponent, EditColorItemComponent } from './app.component';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, AppHeaderComponent, ColorListComponent,
		ColorFormComponent, ColorItemComponent, EditColorItemComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }