import { FlightBookingActions, FlightBookingActionTypes, FlightsLoadedAction, FlightsLoadAction } from './flight-booking.actions';
import { Actions, Effect } from '@ngrx/effects';
import { FlightService } from '@flight-workspace/flight-api';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class FlightBookingEffects {

  constructor(
    private flightService: FlightService,
    private actions$: Actions) {
  }

  @Effect()
  flightLoad = this.actions$
                   .ofType(FlightBookingActionTypes.FlightsLoadAction)
                   .pipe(
                     switchMap((a: FlightsLoadAction) => this.flightService.find(a.from, a.to, a.urgent)),
                     map(flights => new FlightsLoadedAction(flights))
                   );

}
