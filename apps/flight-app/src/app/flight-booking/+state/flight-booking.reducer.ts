import { flights } from '@flight-workspace/flight-api/src/services/flight.data';
import { Action } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';

/**
 * Interface for the 'FlightBooking' data used in
 *  - FlightBookingState, and
 *  - flightBookingReducer
 */
export interface FlightBookingData {

  readonly flights: Flight[];

}

/**
 * Interface to the part of the Store containing FlightBookingState
 * and other information related to FlightBookingData.
 */
export interface FlightBookingState {
  readonly flightBooking: FlightBookingData;
}

export const initialState: FlightBookingData = {
  flights: []
};

export function flightBookingReducer(
  state = initialState, 
  action: FlightBookingActions): FlightBookingData {
  
  switch (action.type) {
    case FlightBookingActionTypes.FlightsLoadedAction:
      const flights = action.flights;
      
      // state.flights = action.flights;

      return { ...state, flights  }

    default:
      return state;
  }
}
