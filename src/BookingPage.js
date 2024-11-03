import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from './BookingProvider';
import BookingForm from './BookingForm';

function BookingPage() {
  const { availableTimes, dispatch } = useContext(BookingContext);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      // Simulating an API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });

      if (response) {
        navigate('/booking-confirmed');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  return (
    <div className="booking-page">
      <h1 style={{
        color: '#495E57',
        textAlign: 'center',
        margin: '2rem 0'
      }}>Reserve a Table</h1>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
}

export default BookingPage;