import {Component} from '@angular/core';
import {trigger, state, animate, transition, style} from '@angular/animations';

export class numPad {
	value:string;
}

const NUMPAD:numPad[] = [
	{value: '1'},
	{value: '2'},
	{value: '3'},
	{value: '4'},
	{value: '5'},
	{value: '6'},
	{value: '7'},
	{value: '8'},
	{value: '9'},
	{value: '.'},
	{value: '0'},
	{value: '<'}
];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
		//animate when an error occurs, changing the opacity if there is an error
		trigger('toggleError', [
			transition('1 <=> 0',
				[
					style({opacity: 1}),
					animate('2s', style({opacity: 0}))
				]),
		])
	],
})

export class AppComponent {
	buttonLabel = NUMPAD;
	displayAmount = '';
	errorState = false;

	onAddToTotal(value:string) {

		//when the backspace is pressed, ensure there is a value in the display, and remove the last character
		if (value === '<' && this.displayAmount.length > 0) {
			this.displayAmount = this.displayAmount.substr(0, this.displayAmount.length - 1);
			return;
		}

		//convert the display amount + the value to a number. If it cannot be converted, it is NAN (user pushed the . button twice)
		const totalAmount = +(this.displayAmount + value);

		//if the total amount is a number, display it. Otherwise, throw an error animation
		if (!Number.isNaN(totalAmount)) {
			this.displayAmount += value;
		}
		else {
			this.errorState = !this.errorState;
			console.log(`Cannot add ${value} to the total: ${this.displayAmount}`);
		}
	}
}
