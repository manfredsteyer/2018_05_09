import { FlightsLoadedAction } from './flight-booking.actions';
import { flightBookingReducer, initialState } from './flight-booking.reducer';

describe('flightBookingReducer', () => {
  it('should work', () => {
    const action: FlightsLoadedAction = new FlightsLoadedAction({});
    const actual = flight - bookingReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
