import logo from './logo.svg';
import './App.css';
import MiniTermek from './components/MiniTermek.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Termék bemutató</h1>
      </header>
      <main>
        <div className='container'>
          <div className='fo-termek'>
            <img src="/kepek/csokor1.jpg" alt="" />
            <h2>Termék neve</h2>
            <p>Termék leírása</p>
          </div>

          <div className='termek-lista'>
            <MiniTermek/>
            <MiniTermek/>
            <MiniTermek/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
