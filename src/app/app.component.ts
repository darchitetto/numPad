import { Component } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

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
    trigger('toggleError', [
      transition('1 <=> 0',
        [
          style({ opacity: 1 }),
          animate('2s', style({ opacity: 0 }))
        ]),
    ])
  ],
})

export class AppComponent {
  buttonLabel = NUMPAD;
  displayAmount = '';
  errorState = false;

  onAddToTotal(value: string) {
    if (value == '<' && this.displayAmount.length > 0) {
      this.displayAmount = this.displayAmount.substr(0, this.displayAmount.length - 1);
      return;
    }

    const totalAmount = +(this.displayAmount + value);

    if(!Number.isNaN(totalAmount)){
      this.displayAmount += value;
      console.log(this.displayAmount);
    }
    else{
      this.errorState = !this.errorState;
      console.log('error')
    }
  }
}
