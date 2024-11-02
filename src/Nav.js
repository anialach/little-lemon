// Nav.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './Nav.css';

function Nav() {
  const location = useLocation(); // This helps us determine which nav item is active

  return (
    <nav>
      <div className="nav-content">
        <Link to="/" className="nav-logo-link">
          <img src={logo} alt="Little Lemon Logo" className="nav-logo" />
        </Link>
        <ul>
          <li>
            <Link 
              to="/" 
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/menu"
              className={location.pathname === "/menu" ? "active" : ""}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              to="/reservations"
              className={location.pathname === "/reservations" ? "active" : ""}
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link 
              to="/order-online"
              className={location.pathname === "/order-online" ? "active" : ""}
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link 
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;