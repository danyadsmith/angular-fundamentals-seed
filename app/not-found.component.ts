import { Component } from "@angular/core";

@Component({
  selector: "not-found",
  template: `
    <div>
      Not Found, return to the <a routerLink="/">Home</a> page.
    </div>
  `
})

export class NotFoundComponent {}
