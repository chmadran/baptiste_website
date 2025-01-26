import './Home.css';
import Contact from './Contact';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    if (sessionStorage.getItem('scrollToContact')) {
      document.getElementById('contact-section').scrollIntoView();
      sessionStorage.removeItem('scrollToContact');
    }
  }, []);
  return (
    <div className="home-container">
      <div id="profile-section" className="section">
        <div className="profile-title">
          <h1>Baptiste Grimaud</h1>
          <div className="profile-title-underline"></div>
        </div>
        <div className="profile-content">
          <div className="profile-content-picture">
            <img src="./assets/pp.png" alt="Baptiste Grimaud" />
          </div>
          <div className="profile-content-description">
          <p>Maître Baptiste Grimaud, avocat au Barreau de Paris, intervient en matière pénale, <strong>dans la défense des prévenus ou des accusés ainsi que dans l'assistance des victimes d'infraction</strong>.</p>

          <p>Diplômé d'un Master 2 de Droit privé général et européen, Maître Baptiste Grimaud a renforcé ses compétences auprès d'avocats pénalistes parisiens de renom, lui permettant de développer un <strong>savoir-faire dans la gestion de l'urgence pénale</strong> (garde à vue, comparution immédiate,…) <strong>et dans l'étude des affaires pénales les plus complexes</strong> (trafic de stupéfiants en bande organisée, association de malfaiteurs, corruption,…).</p>

          <p>Maître Baptiste Grimaud s'engage pleinement à défendre les intérêts de ses clients, en leur offrant un <strong>accompagnement personnalisé</strong> et en déployant des <strong>stratégies de défense adaptées</strong> tout au long de la procédure.</p>

          <p>Le Cabinet intervient dans <strong>toutes les affaires pénales</strong> et intervient également au stade de l'<strong>aménagement de peine</strong> dans la défense des droits des détenus.</p>

          <p>Maître Baptiste Grimaud assure une <strong>disponibilité 24h/24</strong> et vous assiste <strong>devant l'ensemble des juridictions pénales de France</strong> à tous les stades de la procédure.</p>
          </div>
        </div>
      </div>

      <div id="middle-section" className="section">
        <Link to="/mis-en-cause">
          <img src="./assets/rectangle0.png" alt="garde-a-vue" />
        </Link>
        <Link to="/mis-en-cause">
          <img src="./assets/rectangle1.png" alt="comparution-immediate" />
        </Link>
        <Link to="/mis-en-cause">
          <img src="./assets/rectangle2.png" alt="détention" />
        </Link>
        <Link to="/victime">
          <img src="./assets/rectangle3.png" alt="victime" />
        </Link>
      </div>

      <div id="contact-section" className="section">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
