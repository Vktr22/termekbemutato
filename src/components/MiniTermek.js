import React from 'react'
import './MiniTermek.css';

function MiniTermek(props) {
  return (
        <div className="mini-termek"> 
            <img src={props.adat.kep} alt={props.adat.nev} /> 
        </div> 

    );
}
export default MiniTermek;