import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GoLogo from '../images/Go-Logo/SVG/Go-Logo_White.svg';
// import { } from '@fortawesome/free-brands-svg-icons';
import './ProjectsBox.css';

function ProjectsBox() {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                <div className="projects-grid-item projects-grid-item-a">
                    <h3>GUID Generator</h3>
                    <p>Use GUIDs in your Go project with this lib!</p>
                    <p>Built with: <img src={GoLogo} className="go-logo" alt="golang" /> </p>
                </div>
                {/* <div className="projects-grid-item projects-grid-item-b"></div> */}
            </div>
        </div>
    );
}

export default ProjectsBox;