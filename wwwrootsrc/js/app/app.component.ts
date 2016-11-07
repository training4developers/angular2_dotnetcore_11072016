import { Component } from '@angular/core';

@Component({
	selector: 'main',
	template: `<h1>{{header}}</h1>
	<div>
		<label for="color-filter">Color Filter:</label>
		<input type="text" id="color-filter" [(ngModel)]="colorFilter">
	</div>
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

	header: string = 'List Of Colors';

	colors: string[] = [
		'red','blue','white','yellow','saffron','green', 'brown', 'black'
	];

	lastColors: string[] = [];
	filteredColors: Map<string, any[]> = new Map<string, any[]>();
	newColor: string = '';
	colorFilter: string = '';

	addColor() {
		this.colors = this.colors.concat(this.newColor);
		this.newColor = '';
	}

	get sortedColors() {

		if (this.lastColors !== this.colors) {
			console.log('sorting...');
			this.filteredColors.clear();
			this.lastColors = this.colors.sort();
		}

		if (!this.filteredColors.has(this.colorFilter)) {
			console.log('filtering...');
			this.filteredColors.set(this.colorFilter, this.colors.filter((c) =>
				this.colorFilter.length === 0 ? true : c.startsWith(this.colorFilter)));
		}

		return this.filteredColors.get(this.colorFilter);
	}


}