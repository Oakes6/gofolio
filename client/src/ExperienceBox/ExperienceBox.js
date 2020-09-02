import React from 'react';
import './ExperienceBox.css';

function ExperienceBox() {
    return (
        <div className="experience-grid">
            <h1 className="section-title">Experience</h1>
            <div className="experience-item-a experience-item">
                <h3 className="experience-role">Software Engineer/API Developer</h3>
                <ul>
                    <li className="experience-secondary secondary-color">ExxonMobil</li>
                    <br/>
                    <li className="experience-secondary secondary-color">Houston, TX</li>
                    <br/>
                    <li className="experience-time">Feb. 2019 - Current</li>
                </ul>
            </div>
            <div className="experience-item-b experience-item">
                <h3 className="experience-role">Software Engineering Intern</h3>
                <ul>
                    <li className="experience-secondary secondary-color">Dynetics, Inc.</li>
                    <br/>
                    <li className="experience-secondary secondary-color">Huntsville, AL</li>
                    <br />
                    <li className="experience-time">Summer 2018</li>
                </ul>
            </div>
            <div className="experience-item-c experience-item">
                <h3 className="experience-role">Software Engineering Intern</h3>
                <ul>
                    <li className="experience-secondary secondary-color">Dynetics, Inc.</li>
                    <br />
                    <li className="experience-secondary secondary-color">Huntsville, AL</li>
                    <br />
                    <li className="experience-time">Summer 2017</li>
                </ul>
            </div>
            <div style={{"border-bottom": "none"}} className="experience-item-d experience-item">
                <h3 className="experience-role">Data Science Intern</h3>
                <ul>
                    <li className="experience-secondary secondary-color">NextGxDx, Inc.</li>
                    <br />
                    <li className="experience-secondary secondary-color">Nashville, TN</li>
                    <br />
                    <li className="experience-time">Summer 2016</li>
                </ul>
            </div>
            
        </div>
    )
}

export default ExperienceBox;