import React from 'react';
import logo from './logo.svg';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;