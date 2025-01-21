import React from 'react';
import './Domaines.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Domaines = () => {
  const location = useLocation();

  useEffect(() => {
    // Wait for the page to load, then scroll to the section
    if (location.hash) {
      const section = document.getElementById(location.hash.slice(1)); // Remove the '#' from the hash
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className="domaines-container">
    <div className="title-section">
      <h1>DOMAINES D'INTERVENTION</h1>
      <div className="title-underline"></div>
    </div>
  
    {/* Section 1 */}
    <div id="droit-penal-general" className="section">
      <div className="image-container">
        <img src="/assets/palais.png" alt="Droit Pénal général" />
        <div className="overlay">
          <h2>Droit Pénal général</h2>
        </div>
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  
    {/* Section 2 */}
    <div id="droit-penal-affaires" className="section reverse">
      <div className="image-container">
        <img src="/assets/bibliotheque.png" alt="Droit Pénal des Affaires" />
        <div className="overlay">
          <h2>Droit Pénal des Affaires</h2>
        </div>
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

      {/* Section 3 */}
      <div id="amenagement-peine" className="section">
      <div className="image-container">
        <img src="/assets/palais.png" alt="Aménagement de Peine" />
        <div className="overlay">
          <h2>Aménagement de Peine</h2>
        </div>
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

      {/* Section 4 */}
      <div id="droit-victimes" className="section reverse">
      <div className="image-container">
        <img src="/assets/bibliotheque.png" alt="Droit des Victimes" />
        <div className="overlay">
          <h2>Droit des Victimes</h2>
        </div>
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  
  </div>
  
  );
}

export default Domaines;
