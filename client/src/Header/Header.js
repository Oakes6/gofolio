import React from 'react';
// import {Link} from 'react-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-grid">
            <div className="header-item-a header-grid-item">A</div>
            <div className="header-item-b header-grid-item">B</div>
            <div className="header-grid-item"></div>
            <div className="header-item-c header-grid-item">C</div>
        </div>
    );
}

export default Header;