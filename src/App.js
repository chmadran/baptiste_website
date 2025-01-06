import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home/>
      </header>
      <main>
        <h1>test</h1>
      </main>
    </div>
  );
}

export default App;