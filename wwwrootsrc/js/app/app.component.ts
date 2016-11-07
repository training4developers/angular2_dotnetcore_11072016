import { Component } from '@angular/core';

@Component({
	selector: 'main',
	template: `<h1>{{header}}</h1>
	<ul>
		<li *ngFor="let color of sortedColors">{{color}}</li>
	</ul>
	<div>
		<label for="new-color">New Color</label>
		<input type="text" id="new-color" [(ngModel)]="newColor">
		<br><button type="button" (click)="addColor()">Add Color</button>
	</div>`
})
export class AppComponent {

	newColor: string = '';

	addColor() {
		this.colors = this.colors.concat(this.newColor);
		this.newColor = '';
	}

	get sortedColors() {

		console.log('sorted colors');

		if (this.lastColors !== this.colors) {
			console.log('sorting...');
			this.lastColors = this.colors;
			return this.colors.sort();
		}

		return this.colors;
	}

	header: string = 'List Of Colors';

	colors: string[] = [
		'red','blue','white','yellow','saffron','green'
	];

	lastColors: string[] = null;
}