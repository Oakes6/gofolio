import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faReact } from '@fortawesome/free-brands-svg-icons';

import GoLogo from '../images/Go-Logo/SVG/Go-Logo_White.svg';
import ReactLogo from '../images/logo192.png';

// import { } from '@fortawesome/free-brands-svg-icons';
import './ProjectsBox.css';

function ProjectsBox() {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                <a href="https://github.com/Oakes6/guids" style={{"text-decoration": "none"}}>
                <div className="projects-grid-item projects-grid-item-a">
                    <h3 className="projects-container-title">GUID Generator</h3>
                    <p className="secondary-color">Use GUIDs in your Go project with this lib!</p>
                    <p className="secondary-color" style={{display: "inline-block"}}><img src={GoLogo} className="go-logo" alt="golang"/></p>
                </div>
                </a>
                {/* <div className="projects-grid-item projects-grid-item-b">
                    <h3 className="projects-container-title">Song Lyrics Player</h3>
                    <p className="secondary-color">Connect with your Spotify account view lyrics while you play songs from your playlists</p>
                    <p className="secondary-color"><FontAwesomeIcon className="react-logo" icon={faReact} spin/> </p>
                </div> */}
                {/* <div className="projects-grid-item projects-grid-item-b"></div> */}
            </div>
        </div>
    );
}

export default ProjectsBox;