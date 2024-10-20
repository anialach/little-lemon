import React from 'react';
import logo from './logo.svg'; // Make sure you have the logo file in the correct path
import './Footer.css'; // We'll create this CSS file for styling

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
        </div>
        
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Lemon Street, Citrus City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://tiktok.com">TikTok</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;