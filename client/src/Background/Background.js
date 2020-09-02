import React from 'react';
import './Background.css';

const Background = () => {
    return (
        <div className="background-grid">
            <div className="background-grid-item-a background-grid-item">
                <h3 className="experience-role">Enterprise API Development</h3>
                <ul>
                    <li className="experience-secondary secondary-color">Built APIs to enable performant data access</li>
                    <br/>
                    <li className="experience-secondary secondary-color">Designed for adaptability with existing company on-prem services/apps</li>
                    <br />
                    <li className="experience-time">.Net Core, C#, OData</li>
                </ul>
            </div>
            <div className="background-grid-item-b background-grid-item">
                <h3 className="experience-role">Speaking/Presenting On Architecture</h3>
                <ul>
                    <li className="experience-secondary secondary-color">Spoke at quarterly tech conference sharing benefits of APIs</li>
                    <br/>
                    <li className="experience-secondary secondary-color">Presented API design plan to division</li>
                    <br />
                    <li className="experience-time">HTTP, REST</li>
                </ul>
            </div>
            <div className="background-grid-item-c background-grid-item">
                <h3 className="experience-role">Enterprise Web App Development</h3>
                <ul>
                    <li className="experience-secondary secondary-color">Helped develop replacement internal SPA site for new employees</li>
                    <br />
                    <li className="experience-time">Javascript, React, Node, Mongo</li>
                </ul>
            </div>
            <div style={{"border-bottom": "none"}} className="background-grid-item-d background-grid-item">
                <h3 className="experience-role">Reference Architecture Guide Author</h3>
                <ul>
                    <li className="experience-secondary secondary-color">Wrote guide detailing steps for achieving network reverse proxy</li>
                    <br />
                    <li className="experience-time">TLS</li>
                </ul>
            </div>
            <div className="background-grid-title">
                <h1 className="section-title">Background</h1>
            </div>
        </div>
    )
}

export default Background;