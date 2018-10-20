import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: [
    'app.component.scss'
  ],
  template: ` 
    <div class='app'> 
     <img [src]="logo" />
     <div>
     <input 
      type="text" 
      [value]="name"
      (blur)="handleBlur($event)"
      (input)="handleInput($event)"
     >
     <button (click)="handleClick()">Change Name</button>
     <p> {{ name }} </p>
     </div>
    </div> 
  `
})

export class AppComponent {
  title: string;
  name: string;
  logo: string;   

  constructor() {
    this.title = "Ultimate Angular";
    this.name  = "Danya";
    this.logo  = "img/logo-color.svg";
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Danya";
  }
}