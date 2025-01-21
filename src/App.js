import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Honoraires from './Components/Honoraires';
import Domaines from './Components/Domaines';
import PhaseVictime from './Components/PhaseVictime';
import PhaseMisenCause from './Components/PhaseMisenCause';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/honoraires" element={<Honoraires />} />
            <Route path="/victime" element={<PhaseVictime />} />
            <Route path="/mis-en-cause" element={<PhaseMisenCause />} />
            <Route path="/domaines-intervention" element={<Domaines />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
