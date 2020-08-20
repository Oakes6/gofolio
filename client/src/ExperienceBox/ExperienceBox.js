import React from 'react';
import './ExperienceBox.css';

function ExperienceBox() {
    return (
        <div className="experience-grid">
            <h1 className="section-title">Experience</h1>
            <div className="experience-item-a experience-item">
                <h3 className="experience-role">Software Engineer/API Developer</h3>
                <span className="experience-secondary secondary-color">ExxonMobil</span>
                <br/>
                <span className="experience-secondary secondary-color">Houston, TX</span>
                <br />
                <span className="experience-time">Feb. 2019 - Current</span>
            </div>
            <div className="experience-item-b experience-item">
                <h3 className="experience-role">Software Engineering Intern</h3>
                <span className="experience-secondary secondary-color">Dynetics, Inc.</span>
                <br/>
                <span className="experience-secondary secondary-color">Huntsville, AL</span>
                <br />
                <span className="experience-time">Summer 2018</span>
            </div>
            <div className="experience-item-c experience-item">
                <h3 className="experience-role">Software Engineering Intern</h3>
                <span className="experience-secondary secondary-color">Dynetics, Inc.</span>
                <br />
                <span className="experience-secondary secondary-color">Huntsville, AL</span>
                <br />
                <span className="experience-time">Summer 2017</span>
            </div>
            <div className="experience-item-d experience-item">
                <h3 className="experience-role">Data Science Intern</h3>
                <span className="experience-secondary secondary-color">NextGxDx, Inc.</span>
                <br />
                <span className="experience-secondary secondary-color">Nashville, TN</span>
                <br />
                <span className="experience-time">Summer 2016</span>
            </div>
            
        </div>
    )
}

export default ExperienceBox;