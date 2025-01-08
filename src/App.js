import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

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
      </main>
      <footer className="App-footer">
        <p>Mentions légales et politique de confidentialité</p>
        <p>© 2024 par Grimaud Avocat</p>
      </footer>
    </div>
  );
}

export default App;
