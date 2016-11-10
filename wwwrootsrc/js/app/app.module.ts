import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';

import '../../css/styles.scss';

import { AppComponent, EditRowComponent, RegisterFormModelDirective } from './app.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, UtilsModule ],
	declarations: [ AppComponent, EditRowComponent, RegisterFormModelDirective ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }