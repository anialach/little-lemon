// CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';
import bruchetta from '../src/bruchetta.svg';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/booking" className="cta-button">
            Reserve a Table
          </Link>
        </div>
        <div className="image-container">
          <img src={bruchetta} alt="Bruchetta" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;