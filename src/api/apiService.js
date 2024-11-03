/* global fetchAPI, submitAPI */

export const fetchAvailableTimes = async (date) => {
    try {
      return await fetchAPI(date);
    } catch (error) {
      console.error('Error fetching available times:', error);
      return [];
    }
  };
  
  export const submitReservation = async (formData) => {
    try {
      return await submitAPI(formData);
    } catch (error) {
      console.error('Error submitting reservation:', error);
      return false;
    }
  };
  