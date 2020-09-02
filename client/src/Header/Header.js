import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import {Link} from 'react-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-grid">
            <div className="header-item-a header-grid-item">About</div>
            <div className="header-item-b header-grid-item"></div>
            <div className="header-grid-item"></div>
            <div className="header-item-c header-grid-item">
                <a href="mailto: tanner.w.oakes@gmail.com">
                    <FontAwesomeIcon icon={ faPaperPlane } />
                </a>
            </div>
        </div>
    );
}

export default Header;