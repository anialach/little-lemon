import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { submitAPI } from './api/mockAPI';

function Main() {
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
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
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <h2>This week specials!</h2>
            <section className="specials">
              <article>
                <h3>Greek salad</h3>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <button>Order a delivery</button>
              </article>
              <article>
                <h3>Bruschetta</h3>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <button>Order a delivery</button>
              </article>
              <article>
                <h3>Lemon Dessert</h3>
                <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <button>Order a delivery</button>
              </article>
            </section>
          </>
        } />
        <Route path="/booking" element={<BookingPage submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;