import './Honoraires.css'

const Honoraires = () => {
  return (
    <div className="honoraires-container">
        <div className="honoraires-title-section">
          <h1>Honoraires</h1>
          <div className="honoraires-title-underline"></div>
        </div>
        <div className="honoraires-text-section">
          <p>Le Règlement Intérieur National de la profession d’Avocat, en son article 11, fixe des règles précises en matière d’honoraires : </p>
          <p>« Les honoraires sont fixés selon les usages, en fonction de la situation de fortune du client, de la difficulté de l’affaire, des frais exposés par l’avocat, de sa notoriété et des diligences de celui-ci. L’avocat chargé d’un dossier peut demander des honoraires à son client même si ce dossier lui est retiré avant sa conclusion, dans la mesure du travail accompli ».</p>
          <p>Dans une logique de totale transparence, les honoraires sont fixés dès le premier rendez-vous en concertation avec les clients et aucune facturation n’a lieu sans en avoir été discutée au préalable.</p>
          <p>A titre d’information, le premier rendez-vous sera déduit du coût total des honoraires en cas d’ouverture du dossier.</p>
          <img src="/assets/honoraires.png" alt="honoraires"></img>
        </div>
    </div>
  );
}

export default Honoraires;

