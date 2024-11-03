import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Footer from './Footer';
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';
import ConfirmedBooking from './components/ConfirmedBooking';
import { BookingProvider } from './BookingProvider';

function App() {
  return (
    <Router>
      <BookingProvider>
        <div className="App">
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
              <Route path="/order-online" element={<OrderOnline />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BookingProvider>
    </Router>
  );
}

export default App;