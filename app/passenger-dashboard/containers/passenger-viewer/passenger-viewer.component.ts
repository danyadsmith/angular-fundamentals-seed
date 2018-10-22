import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { PassengerDashboardService } from "../../passenger-dashboard.service";

import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <div>
      <button (click)="goBack()">
        &lsaquo; Go Back
      </button>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})

export class PassengerViewerComponent implements OnInit {
  passenger: IPassenger;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((data: Params) =>  this.passengerService .getPassenger(data.id))
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

  goBack(): void {
    this.router.navigate(["/passengers"]);
  }
}
