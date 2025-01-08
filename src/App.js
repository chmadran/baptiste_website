import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { ChevronUp } from 'lucide-react';


function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">
        <Navbar />
        <Home />
      </header>
      <main>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section className="back-to-top">
          <a href="#home"> <ChevronUp /></a>
          <a href="#home">HAUT DE PAGE</a>
        </section>
      </main>
      <footer className="App-footer">
        <p>Mentions légales et politique de confidentialité</p>
        <p>© 2024 par Grimaud Avocat</p>
      </footer>
    </div>
  );
}

export default App;
