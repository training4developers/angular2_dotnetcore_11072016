import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';

import '../../css/styles.scss';

import { AppComponent } from './app.component';

@NgModule({
	imports: [ BrowserModule, ReactiveFormsModule, UtilsModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }