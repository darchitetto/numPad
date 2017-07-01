import { Component } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

export class numPad {
  id: number;
  value: string;
}

const NUMPAD: numPad[] = [
  { id: 1, value: '1' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
  { id: 4, value: '4' },
  { id: 5, value: '5' },
  { id: 6, value: '6' },
  { id: 7, value: '7' },
  { id: 8, value: '8' },
  { id: 9, value: '9' },
  { id: 10, value: '.'},
  { id: 11, value: '0' },
  { id: 12, value: '<'}
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
