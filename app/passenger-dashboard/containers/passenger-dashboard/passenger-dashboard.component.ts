import { Component, OnInit } from "@angular/core";

import { PassengerDashboardService } from "../../passenger-dashboard.service";

import { IPassenger } from "../../models/passenger.interface";
import { Router } from "@angular/router";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
  <div>
    <h3>Airline Passengers</h3>
    <passenger-count [items]="passengers"></passenger-count>
    <passenger-detail *ngFor="let passenger of passengers;"
      [detail]="passenger"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)"
      (view)="handleView($event)">
    </passenger-detail>
  </div>
  `
})

export class PassengerDashboardComponent implements OnInit {
  passengers: IPassenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengerService
      .getPassengers()
      .subscribe((data: IPassenger[]) => this.passengers = data);
  }

  handleEdit(event: IPassenger): void {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: IPassenger) => {
        this.passengers = this.passengers.map((passenger: IPassenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }

  handleRemove(event: IPassenger): void {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: IPassenger) => {
        this.passengers = this.passengers.filter((passenger: IPassenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  handleView(event: IPassenger): void {
    this.router.navigate(["/passengers", event.id]);
  }
}
