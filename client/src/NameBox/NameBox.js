import React from 'react';
import '../App.css';
import './NameBox.css';
import CoffeeDoddle from '../CoffeeDoddle.svg'

function NameBox() {
    return (
        <div className="grid">
            <div className="grid-item">
                {/* <h1 className="primary-color">Tanner Oakes</h1> */}
                Tanner Oakes
            </div>
            <div className="grid-item">
                {/* <h1 className="secondary-color">Backend Developer based in TX</h1> */}
                Backend Developer based in TX
            </div>
            <div className="grid-item">
                {/* <img src={CoffeeDoddle} className="coffee-pic" alt="artsy doodle of coffee dude" /> */}
            </div>
        </div>
    );
  }
  
  export default NameBox;