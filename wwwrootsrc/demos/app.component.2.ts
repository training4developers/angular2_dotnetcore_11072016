import { Component } from '@angular/core';

import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Directive({
    selector: '[registerForm]'
})
export class RegisterFormModelDirective implements OnInit {
    private el: HTMLInputElement;

    @Input('registerForm') public form: NgForm;
    @Input('registerModel') public model: NgModel;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    ngOnInit() {
        if (this.form && this.model) {
            this.form.form.addControl(this.model.name, this.model.control);
        }
    }
}

@Component

@Component({
	selector: 'main',
	template: `<form novalidate #myForm="ngForm">
	
		<input type="checkbox" name="showMe" [(ngModel)]="showMe">
		<div *ngIf="showMe">
			<input type="text" id="message" name="message" [(ngModel)]="message" #messageNgModel="ngModel" required>
		</div>

	</form>`
})
export class AppComponent {


}