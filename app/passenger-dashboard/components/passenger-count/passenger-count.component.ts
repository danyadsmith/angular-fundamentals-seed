import { Component, Input } from "@angular/core";

import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-count",
  template: `
    <div>
      <div>
        Total checked in: {{ checkedInCount() }} / {{ items?.length }}
      </div>
    </div>
  `
})

export class PassengerCountComponent {
  @Input()
  items: IPassenger[];

  checkedInCount(): number {
    if (!this.items) { return; }
    return this.items.filter((passenger: IPassenger) => passenger.checkedIn).length;
  }
}
