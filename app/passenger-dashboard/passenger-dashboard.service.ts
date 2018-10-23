import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IPassenger } from './models/passenger.interface';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor (private http: Http) { }

  getPassenger(id: number): Observable<IPassenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPassengers(): Observable<IPassenger[]> {
    return this.http
      .get(PASSENGER_API)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(passenger: IPassenger): Observable<IPassenger> {
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removePassenger(passenger: IPassenger): Observable<IPassenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`, passenger)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
