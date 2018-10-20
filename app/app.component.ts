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
      #username
     >
     <button (click)="handleClick(username.value)">Change Name</button>
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

  handleClick(value: string) {
    console.log(value);
  }
}