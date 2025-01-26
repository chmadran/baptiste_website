import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Domaines.css';

const Domaines = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
  
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      const offset = 170; // Match padding-top value
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location]);

  return (
    <div className="domaines-container">
      <div className="domaines-title-section">
        <h1>DOMAINES D'INTERVENTION</h1>
        <div className="domaines-title-underline"></div>
      </div>

      <div id="droit-penal-affaires" className="domaines-section">
        <div className="domaines-image-container">
          <img src="/assets/justice.png" alt="Droit Pénal Général et Droit Pénal des Affaires" />
        </div>
        <div className="domaines-text-container">
          <h2>Droit Pénal Général et<br />Droit Pénal des Affaires</h2>
          <div className="domaines-text">
            <p>Le Cabinet dédie son activité exclusivement à la matière pénale.</p>

            <p>Maître Baptiste Grimaud s'engage aussi bien dans la défense des prévenus ou accusés que dans l'assistance des victimes d'infractions pénales.</p>

            <p>Le Cabinet intervient ainsi dans les contentieux relevant du :</p>

            <ul>
              <li><strong>Droit pénal général</strong> : agression sexuelle, viol, trafic de stupéfiants, meurtre, vol, recel, violences, proxénétisme, homicide involontaire, outrage, rébellion, etc…</li>

              <li><strong>Droit pénal des affaires</strong> : escroquerie, abus de confiance, corruption, abus de biens sociaux, fraude fiscale, etc…</li>

              <li><strong>Droit pénal du travail</strong> : harcèlement moral au travail, prêt illicite de main d'oeuvre, travail dissimulé, etc…</li>

              <li><strong>Droit pénal routier</strong> : conduite sans permis, conduite en état d'ivresse, excès de vitesse, délit de fuite, homicide involontaire, etc…</li>

              <li><strong>Droit pénal de la famille</strong> : violences conjugales, harcèlement moral conjugal, menaces, non-représentation d'enfant, soustraction d'enfant, abandon de famille, etc…</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="amenagement-peine" className="domaines-section">
        <div className="domaines-image-container">
          <img src="/assets/aménagement.png" alt="Aménagement de Peine" />
        </div>
        <div className="domaines-text-container">
          <h2>Aménagement de Peine</h2>
          <div className="domaines-text">
            <p>En cas de condamnation de l'un de vos proches à une peine d'emprisonnement, l'assistance d'un avocat pénaliste est nécessaire afin d'envisager une remise en liberté anticipée sous réserve de respecter les conditions imposées par le législateur.</p>

            <p>La peine pourra alors être exécutée selon des modalités différentes : semi-liberté, bracelet électronique, placement à l'extérieur, libération conditionnelle, etc…</p>

            <p>Maître Baptiste Grimaud <strong>assurera le lien entre le condamné et les autorités judiciaires</strong> -conseiller d'insertion de probation, administration pénitentiaire- et mettra en oeuvre son expertise juridique pour qu'un <strong>projet de réinsertion adapté</strong> soit proposé au Juge d'Application des Peines le plus rapidement possible.</p>
          </div>
        </div>
      </div>

      <div id="droit-victimes" className="domaines-section">
        <div className="domaines-image-container">
          <img src="/assets/victimes.png" alt="Droit des Victimes" />
        </div>
        <div className="domaines-text-container">
          <h2>Droit des Victimes</h2>
          <div className="domaines-text">
            <p>Le Cabinet <strong>assiste les victimes d'infraction à tous les stades de la procédure pénale</strong> : dès le moment du dépôt de plainte, pendant l'enquête et lors de l'audience correctionnelle pour obtenir réparation des différents préjudices.</p>

            <p>En cas d'ouverture d'une information judiciaire, Maître Baptiste Grimaud assiste les <strong>parties civiles</strong> lors de toute la procédure d'instruction, notamment pour formuler des demandes d'actes utiles à la manifestation de la vérité auprès du Juge d'instruction, ainsi que pour <strong>porter leur voix</strong> et <strong>garantir une juste indemnisation de leur préjudice devant toutes les juridictions de jugement</strong> (Tribunal correctionnel, Cour d'assises, Cour criminelle départementale).</p>

            <p>En outre, le Cabinet intervient <strong>auprès des instances permettant l'indemnisation des victimes d'infractions</strong> (CIVI, SARVI) pour solliciter la réparation des dommages subis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domaines;