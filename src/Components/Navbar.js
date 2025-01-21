import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './Navbar.css';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDomainesDropdownVisible, setDomainesDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    console.log('PHASES Dropdown Visible: true');
    setDropdownVisible(true);
  };
  
  const handleMouseLeave = () => {
    console.log('PHASES Dropdown Visible: false');
    setDropdownVisible(false);
  };
  
  const handleDomainesMouseEnter = () => {
    console.log("DOMAINES Dropdown Visible: true");
    setDomainesDropdownVisible(true);
  };
  
  const handleDomainesMouseLeave = () => {
    console.log("DOMAINES Dropdown Visible: false");
    setDomainesDropdownVisible(false);
  };  

  const location = useLocation();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If we're on the home page, smooth scroll to the contact section
      document.getElementById('contact-section').scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      // If we're on another page, navigate to home page and then scroll to contact
      window.location.href = '/#contact-section';
    }
  };

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
          <li 
            className="dropdown"
            onMouseEnter={handleDomainesMouseEnter}
            onMouseLeave={handleDomainesMouseLeave}
          >
            <a href="#domaines">DOMAINES D'INTERVENTION</a>
            <ul className={`dropdown-menu ${isDomainesDropdownVisible ? 'show' : ''}`}>
              <li><Link to="/domaines-intervention#droit-penal-general">Droit Pénal général</Link></li>
              <li><Link to="/domaines-intervention#droit-penal-affaires">Droit Pénal des Affaires</Link></li>
              <li><Link to="/domaines-intervention#amenagement-peine">Aménagement de Peine</Link></li>
              <li><Link to="/domaines-intervention#droit-victimes">Droit des Victimes</Link></li>
            </ul>
          </li>
          <li 
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#phases">PHASES D'INTERVENTION</a>
            <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
              <li><Link to="/victime">Je suis victime</Link></li>
              <li><Link to="/mis-en-cause">Je suis mis en cause</Link></li>
            </ul>
          </li>
          <li><a href="honoraires">HONORAIRES</a></li>
          <li>
            <a href="#contact-section" onClick={handleContactClick}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
