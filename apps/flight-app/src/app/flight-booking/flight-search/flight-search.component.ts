import { FlightsLoadAction } from './../+state/flight-booking.actions';
import { Observable } from 'rxjs/Observable';
import { FlightBookingState } from './../+state/flight-booking.reducer';
import { Component, OnInit } from '@angular/core';

import { FlightService, Flight } from '@flight-workspace/flight-api';
import { Store } from '@ngrx/store';
import { FlightsLoadedAction } from '../+state/flight-booking.actions';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  flights$: Observable<Flight[]>

  constructor(
    private store: Store<FlightBookingState>,
    private flightService: FlightService) {
  }

  ngOnInit() {

    this.flights$ = this.store.select(s => s.flightBooking.flights);

  }

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    '3': true,
    '5': true
  };


  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(new FlightsLoadAction(this.from, this.to, this.urgent));

  }

  delay(): void {
    this.flightService.delay();
  }
}
