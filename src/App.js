import logo from './logo.svg';
import './App.css';
import MiniTermek from './components/MiniTermek.js';
import termekek from './adatok.js';

function App() {

  function termekKivalaszt(adat){
    console.log("Kiválasztott termék: ", adat);
  }

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
            {/*<MiniTermek/>
            <MiniTermek/>
            <MiniTermek/> ----> ezek helyett map-el vegig iteralunk az adatok listan AZERT MAP MERT EZ VISSZAAD ERTEKEEET
             a zarojelben az elem a fgvny beepitett parametere!!!
            */}
            {termekek.map((elem) => (
              <MiniTermek key={elem.id} adat={elem} kattintas={termekKivalaszt}/>
            ))}

            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
