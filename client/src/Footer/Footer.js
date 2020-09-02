import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-grid">
            <div className="footer-grid-item">© 2020</div>
            <div className="footer-grid-item"></div>
            <div className="footer-grid-item footer-grid-item-c"></div>
            <div className="footer-grid-item footer-grid-item-d">
                <a href="https://www.linkedin.com/in/tanner-oakes-67b9b7108/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a> 
                <a href="https://github.com/Oakes6">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default Footer;