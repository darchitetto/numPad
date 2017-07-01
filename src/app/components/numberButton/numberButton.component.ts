import { Component,Input, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'number-button',
  templateUrl: './numberButton.component.html',
  styleUrls: ['./numberButton.component.css'],
  animations: [
    trigger('toggleState', [
      transition('1 <=> 0',
        [
          style({ backgroundColor: '#00b0ff' }),
          animate('.5s', style({ backgroundColor: '#273746' }))
        ]),
    ])
  ],
})
export class NumberButton {
  title = 'numPad';
  shouldToggle = false;

  @Input() buttonLabel: string ;
  @Output() onAddToTotal = new EventEmitter<string>();

  addToTotal(value: string) {
    this.shouldToggle = !this.shouldToggle;
    this.onAddToTotal.emit(value);
  }
}

