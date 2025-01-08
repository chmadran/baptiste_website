import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleRedirect = () => {
    window.open('https://consultation.avocat.fr/', '_blank');
  };

  return (
    <nav className="navbar">
          <div className="navbar-logo">
              <button onClick={handleRedirect}>
                <p>
                  Prendre RDV <span>&gt;</span>
                </p>
              </button>
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