import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Honoraires from './Components/Honoraires';
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
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
