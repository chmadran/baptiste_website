import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home/>
      </header>
      <main>
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;