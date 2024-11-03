import React, { useState, useEffect } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: 1,
    occasion: 'Birthday'
  });

  const [errors, setErrors] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const [submitError, setSubmitError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
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

  // Validate the form whenever formData changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {
      date: '',
      time: '',
      guests: '',
      occasion: ''
    };

    // Date validation
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      newErrors.date = 'Please select a future date';
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    // Guests validation
    if (formData.guests < 1) {
      newErrors.guests = 'Must be at least 1 guest';
    } else if (formData.guests > 10) {
      newErrors.guests = 'Maximum 10 guests allowed';
    }

    // Occasion validation
    if (!formData.occasion) {
      newErrors.occasion = 'Please select an occasion';
    }

    setErrors(newErrors);

    // Check if form is valid (no errors)
    const isValid = !Object.values(newErrors).some(error => error !== '');
    setIsFormValid(isValid);
  };

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

    // Final validation before submit
    validateForm();
    if (!isFormValid) {
      setSubmitError('Please correct all errors before submitting.');
      return;
    }

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
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
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
          aria-invalid={errors.date ? "true" : "false"}
          aria-describedby="date-error"
        />
        {errors.date && (
          <span className="error-message" id="date-error">
            {errors.date}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
          aria-invalid={errors.time ? "true" : "false"}
          aria-describedby="time-error"
        >
          <option value="">Select a time</option>
          {Array.isArray(availableTimes) && availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {errors.time && (
          <span className="error-message" id="time-error">
            {errors.time}
          </span>
        )}
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
          aria-invalid={errors.guests ? "true" : "false"}
          aria-describedby="guests-error"
        />
        {errors.guests && (
          <span className="error-message" id="guests-error">
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
          required
          aria-invalid={errors.occasion ? "true" : "false"}
          aria-describedby="occasion-error"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && (
          <span className="error-message" id="occasion-error">
            {errors.occasion}
          </span>
        )}
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={!isFormValid}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;