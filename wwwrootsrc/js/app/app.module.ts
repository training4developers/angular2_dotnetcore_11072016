import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import '../../css/styles.scss';

import { AppComponent, JsLogger, EmailValidatorDirective } from './app.component';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, JsLogger, EmailValidatorDirective ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }