import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: [
    'app.component.scss'
  ],
  template: ` 
    <div class='app'> 
     <img [src]="logo" />
     <h1 [innerHTML]="title"></h1>
     <input type="text" [value]="name">
     <p> {{ name }} </p>
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
}