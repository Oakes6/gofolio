import React from 'react';
import '../App.css';
import './NameBox.css';
import CoffeeDoddle from '../CoffeeDoddle.svg'

function NameBox() {
    return (
        <div className="main">
            <div>
                <header></header>
            </div>
            <div>
                <h1 className="primary">Tanner Oakes</h1>
                <h1 className="secondary">Backend Developer based in TX</h1>
                <img src={CoffeeDoddle} className="App-logo" />
            </div>
            <div className="experience">

            </div>
            <div className="projects">

            </div>
        </div>
    );
  }
  
  export default NameBox;