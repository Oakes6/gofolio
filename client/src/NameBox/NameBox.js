import React from 'react';
import CoffeeDoddle from '../CoffeeDoddle.svg';
import First from '../images/nighthawks\ humaaans/first.png';
import Second from '../images/nighthawks\ humaaans/second.png';
import Third from '../images/nighthawks\ humaaans/third.png';
import Fourth from '../images/nighthawks\ humaaans/fourth.png';
import "./NameBox.css";

function NameBox() {
    return (
        <div>
            <div className="namebox-grid">
                <div className="name">
                    <h1 className="primary-color title">Tanner Oakes</h1>
                    <h1 className="secondary-color title-secondary">Backend Developer based in TX</h1>
                </div>
                <div className="pic">
                    <img src={Second} className="coffee-pic" alt="nighthawks" />
                </div>
            </div>
            {/* <figure className=""> */}
                {/* <img src={Fourth} className="coffee-pic" alt="nighthawks" /> */}
            {/* </figure> */}
        </div>
    );
  }
  
  export default NameBox;