import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: [
    'app.component.scss'
  ],
  template: ` 
    <div class='app'> 
      {{ title }} <br>
      {{ numberOne + numberTwo }} <br>
      {{ isHappy ? ':)' : ':(' }}
    </div> 
  `
})

export class AppComponent {
  title: string;
  numberOne: number;
  numberTwo: number;
  isHappy: boolean;

  constructor() {
    this.title = "Ultimate Angular";
    this.numberOne = 1;
    this.numberTwo = 2;
    this.isHappy = false;
  }
}