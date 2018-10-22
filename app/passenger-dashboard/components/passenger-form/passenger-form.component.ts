import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        <label for="id">
          Passenger ID:
        </label>
        <input type="number" name="id" [ngModel]="detail?.id" readonly required
          #id="ngModel">
      </div>
      <div>
        <label for="name">
          Passenger name:
        </label>
        <input type="text" name="fullname" [ngModel]="detail?.fullname"
          #fullname="ngModel" required>
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>
      </div>
      <div>
        <label>
          Checked In:
        </label>
        <input type="checkbox" name="checkedIn" [ngModel]="detail?.checkedIn"
           (ngModelChange)="toggleCheckIn($event)">
      </div>
      <div *ngIf="form.value.checkedIn">
        <label for="checkInDate">
           Check in date:
        </label>
        <input type="number" name="checkInDate" [ngModel]="detail?.checkInDate">
      </div>
      <div>
        <label for="baggage">
          Luggage
        </label>
        <select name="baggage" [ngModel]="detail?.baggage">
        <option *ngFor="let item of baggage" [value]="item.key" 
          [selected]="item.key === detail?.baggage">
            {{ item.value }}
          </option>
        </select>
      </div>
      {{ form.value | json }}
    </form>
  `
})

export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Carry-on Only'
    },
    {
      key: 'hold-only',
      value: 'Checked-in Only'
    },
    {
      key: 'hand-hold',
      value: 'Carry-on and Checked-in'
    }
  ];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
