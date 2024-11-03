import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  // Get the latest booking from localStorage
  const getLatestBooking = () => {
    const savedBookings = localStorage.getItem('bookings');
    if (savedBookings) {
      const bookings = JSON.parse(savedBookings);
      return bookings[bookings.length - 1];
    }
    return null;
  };

  const latestBooking = getLatestBooking();

  return (
    <div className="confirmed-booking">
      <div className="confirmation-container" style={{
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{ color: '#495E57' }}>Booking Confirmed!</h1>
        {latestBooking && (
          <div style={{ margin: '1.5rem 0' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#333' }}>Booking Details:</h2>
            <p>Date: {new Date(latestBooking.date).toLocaleDateString()}</p>
            <p>Time: {latestBooking.time}</p>
            <p>Number of Guests: {latestBooking.guests}</p>
            <p>Occasion: {latestBooking.occasion}</p>
          </div>
        )}
        <p style={{ margin: '1rem 0' }}>
          You will receive a confirmation email with your booking details shortly.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          marginTop: '2rem' 
        }}>
          <Link to="/" style={{
            display: 'inline-block',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#F4CE14',
            color: '#333',
            textDecoration: 'none',
            borderRadius: '16px',
          }}>
            Return to Home
          </Link>
          <Link to="/booking" style={{
            display: 'inline-block',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#495E57',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '16px',
          }}>
            Make Another Reservation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;