import './Home.css';
import Contact from './Contact';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div className="home-container">
      <div id="profile-section" className="section">
        <div className="profile-title">
          <h1>Baptiste Grimaud</h1>
          <div className="title-underline"></div>
        </div>
        <div className="profile-content">
          <div className="profile-content-picture">
            <img src="./assets/pp.png" alt="Baptiste Grimaud" />
          </div>
          <div className="profile-content-description">
            <p>
              ​"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>
            <p>
              ​"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
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
