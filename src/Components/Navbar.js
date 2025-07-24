import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDomainesDropdownVisible, setDomainesDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const togglePhasesDropdown = () => setDropdownVisible(!isDropdownVisible);
  const toggleDomainesDropdown = () => setDomainesDropdownVisible(!isDomainesDropdownVisible);

  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false); // close menu on contact click

    if (location.pathname === '/') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollToContact', 'true');
      window.location.href = '/#contact-section';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src="/assets/logo.png" alt="logo_grimaud" />
        </div>
        <div className="navbar-button">
          <button>
            <p>06 34 17 61 65</p>
            <p>Urgence pénale 7j/7 24h/24</p>
          </button>
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">LE CABINET</a></li>

          <li className="dropdown">
            <div onClick={toggleDomainesDropdown}>
              <Link to="/domaines-intervention">DOMAINES D'INTERVENTION</Link>
            </div>
            <ul className={`dropdown-menu ${isDomainesDropdownVisible ? 'show' : ''}`}>
              <li><Link to="/domaines-intervention#droit-penal-affaires">Droit Pénal général</Link></li>
              <li><Link to="/domaines-intervention#droit-penal-affaires">Droit Pénal des Affaires</Link></li>
              <li><Link to="/domaines-intervention#amenagement-peine">Aménagement de Peine</Link></li>
              <li><Link to="/domaines-intervention#droit-victimes">Droit des Victimes</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <div onClick={togglePhasesDropdown}>
              <a href="#phases">PHASES D'INTERVENTION</a>
            </div>
            <ul className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
              <li><Link to="/victime">Je suis victime</Link></li>
              <li><Link to="/mis-en-cause">Je suis mis en cause</Link></li>
            </ul>
          </li>

          <li><a href="/honoraires">HONORAIRES</a></li>

          <li><a href="#contact-section" onClick={handleContactClick}>CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
