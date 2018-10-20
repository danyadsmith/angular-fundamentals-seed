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
        (input)="handleChange($event.target.value)"
      >

      <template [ngIf]="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </template>

      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>
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
    this.name = "";
    this.logo  = "img/logo-color.svg";
  }

  handleChange(value: string) {
    this.name = value;
  }
}
