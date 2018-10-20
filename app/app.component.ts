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
      [(ngModel)]="name"
     >
     <input 
      type="text" 
      [ngModel]="name"
      (ngModelChange)="handleChange($event)"
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
    this.name  = "Danya D. Smith";
    this.logo  = "img/logo-color.svg";
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleClick() {
    this.name = "Danya";
  }
}