import logo from './logo.svg';
import './App.css';

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
            <div className='mini-termek'><img src="/kepek/csokor2.jpg" alt="" /></div>
            <div className='mini-termek'><img src="/kepek/csokor3.jpg" alt="" /></div>
            <div className='mini-termek'><img src="/kepek/csokor4.jpg" alt="" /></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
