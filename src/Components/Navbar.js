import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src="/assets/logo.png" alt="logo_grimaud" />
        </div>
        <div className="navbar-title">
          <h1>Grimaud Avocat</h1>
        </div>
        <div className="navbar-button">
          <button>
            <p>06 01 02 03 04</p>
            <p>Urgence pénale 7j/7 24h/24</p>
          </button>
        </div>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="/">LE CABINET</a></li>
          <li><a href="#domaines">DOMAINES D'INTERVENTION</a></li>
          <li><a href="#phases">PHASES D'INTERVENTION</a></li>
          <li><a href="honoraires">HONORAIRES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;