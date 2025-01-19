import React from 'react';
import './Domaines.css';

const Domaines = () => {
  return (
    <div className="domaines-container">
      <div className="title-section">
        <h1>DOMAINES D'INTERVENTION</h1>
        <div className="title-underline"></div>
      </div>

      {/* Section 1 */}
      <div id="droit-penal-general" className="section">
        <div className="section-content">
          <div className="text">
            <h2>Droit Pénal général</h2>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="image">
            <img src="/assets/droit-penal-general.jpg" alt="Droit Pénal général" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div id="droit-penal-affaires" className="section reverse">
        <div className="section-content">
          <div className="image">
            <img src="/assets/droit-penal-affaires.jpg" alt="Droit Pénal des Affaires" />
          </div>
          <div className="text">
            <h2>Droit Pénal des Affaires</h2>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div id="amenagement-peine" className="section">
        <div className="section-content">
          <div className="text">
            <h2>Aménagement de Peine</h2>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="image">
            <img src="/assets/amenagement-peine.jpg" alt="Aménagement de Peine" />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div id="droit-victimes" className="section reverse">
        <div className="section-content">
          <div className="image">
            <img src="/assets/droit-victimes.jpg" alt="Droit des Victimes" />
          </div>
          <div className="text">
            <h2>Droit des Victimes</h2>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domaines;
