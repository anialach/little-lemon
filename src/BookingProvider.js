import React, { useReducer } from 'react';

export const BookingContext = React.createContext();

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, date) => {
  // For now, return the same times regardless of date
  return state;
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return updateTimes(state, action.payload);
    default:
      return state;
  }
};

export function BookingProvider({ children }) {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  return (
    <BookingContext.Provider value={{ availableTimes, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}