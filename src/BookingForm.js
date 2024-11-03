import React, { useState, useEffect } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Initialize with current date
    dispatch({ type: 'UPDATE_TIMES', payload: new Date() });
  }, [dispatch]);

  useEffect(() => {
    if (availableTimes && availableTimes.length > 0 && !formData.time) {
      setFormData(prev => ({
        ...prev,
        time: availableTimes[0]
      }));
    }
  }, [availableTimes, formData.time]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'date') {
      const dateObj = new Date(value);
      dispatch({ type: 'UPDATE_TIMES', payload: dateObj });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    try {
      const success = await submitForm(formData);
      if (!success) {
        setSubmitError('Failed to submit reservation. Please try again.');
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again later.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      {submitError && (
        <div className="error-message" role="alert">
          {submitError}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          min={today}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a time</option>
          {Array.isArray(availableTimes) && availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          min="1"
          max="10"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;