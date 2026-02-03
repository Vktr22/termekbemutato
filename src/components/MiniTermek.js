import React from 'react'
import './MiniTermek.css';

function MiniTermek(props) {

  function kattintasKezelo(){
    props.kattintas(props.adat);
  }
    
  return (
        <div className="mini-termek" onClick={kattintasKezelo}> 
            <img src={props.adat.kep} alt={props.adat.nev} /> 
        </div> 

    );
}
export default MiniTermek;