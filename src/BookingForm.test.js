// BookingForm.test.js
import { updateTimes, initializeTimes } from './reducers';

test('initializeTimes returns the correct initial value', () => {
    const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(initialTimes);
});

test('updateTimes returns the same value provided in the state', () => {
    const state = ["17:00", "18:00", "19:00"];
    const selectedDate = "2023-06-15";
    expect(updateTimes(state, selectedDate)).toEqual(state);
});