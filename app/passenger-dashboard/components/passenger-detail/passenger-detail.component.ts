import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      <span
        class="status"
        [class.checked-in]="detail.checkedIn">
      </span>
      <div *ngIf="editing">
        <input
          type="text"
          #name
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
        >
      </div>
      <div *ngIf="!editing">
      {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{ detail.checkInDate ?
            (detail.checkInDate | date: 'yMMMMd' | uppercase ) :
            'Not checked in' }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
      <button (click)="goToPassenger()">
        View
      </button>
    </div>
  `
})

export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail: IPassenger;

  @Output()
  edit: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();

  @Output()
  remove: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();

  @Output()
  view: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();

  editing: boolean;

  constructor() {
    this.editing = false;
  }

  ngOnChanges(changes: any): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string): void {
    this.detail.fullname = value;
  }

  toggleEdit(): void {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove(): void {
    this.remove.emit(this.detail);
  }

  goToPassenger(): void {
    this.view.emit(this.detail);
  }
}

