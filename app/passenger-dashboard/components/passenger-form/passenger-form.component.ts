import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger ID:
        <input type="number" name="id" [ngModel]="detail?.id" readonly>
      </div>
      <div>
        Passenger name:
        <input type="text" name="fullname" [ngModel]="detail?.fullname">
      </div>
      <div>
        Checked In:
        <label>
          <input type="radio" name="checkedIn" [ngModel]="detail?.checkedIn"
            [value]="true" (ngModelChange)="toggleCheckIn($event)">
          Yes
        </label>
        <label>
          <input type="radio" name="checkedIn" [ngModel]="detail?.checkedIn"
            [value]="false" (ngModelChange)="toggleCheckIn($event)">
          No
        </label>
      </div>
      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate">
      </div>
      {{ form.value | json }}
    </form>
  `
})

export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
