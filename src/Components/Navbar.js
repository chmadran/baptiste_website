import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
          <div className="navbar-logo">
              <img src="/grimaud2.png" alt="logo_grimaud" />
          </div>
          <div className="navbar-links">
          <ul>
            <li><a href="#home">ACCUEIL</a></li>
            <li><a href="#specialites">SPÉCIALITÉS</a></li>
            <li><a href="#expertise">EXPERTISE</a></li>
            <li><a href="#about">A PROPOS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;