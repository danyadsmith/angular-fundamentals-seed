import { Component, OnInit } from "@angular/core";

import { PassengerDashboardService } from "../../passenger-dashboard.service";

import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <div>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  passenger: IPassenger;

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: IPassenger) => this.passenger = data);
  }

  onUpdatePassenger(event: IPassenger): void {
    console.log(event);
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: IPassenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }
}
