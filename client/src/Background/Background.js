import React from 'react';
import './Background.css';

const Background = () => {
    return (
        <div className="background-grid">
            <div className="background-grid-item-a background-grid-item">
                <h3 className="experience-role">Software Engineer/API Developer</h3>
                <span className="experience-secondary secondary-color">ExxonMobil</span>
                <br/>
                <span className="experience-secondary secondary-color">Houston, TX</span>
                <br />
                <span className="experience-time">Feb. 2019 - Current</span>
            </div>
            <div className="background-grid-item-b background-grid-item">
                <h3 className="experience-role">Software Engineering Intern</h3>
                <span className="experience-secondary secondary-color">Dynetics, Inc.</span>
                <br/>
                <span className="experience-secondary secondary-color">Huntsville, AL</span>
                <br />
                <span className="experience-time">Summer 2018</span>
            </div>
            <div className="background-grid-item-c background-grid-item">
                <h3 className="experience-role">Software Engineering Intern</h3>
                <span className="experience-secondary secondary-color">Dynetics, Inc.</span>
                <br />
                <span className="experience-secondary secondary-color">Huntsville, AL</span>
                <br />
                <span className="experience-time">Summer 2017</span>
            </div>
            <div className="background-grid-item-d background-grid-item">
                <h3 className="experience-role">Data Science Intern</h3>
                <span className="experience-secondary secondary-color">NextGxDx, Inc.</span>
                <br />
                <span className="experience-secondary secondary-color">Nashville, TN</span>
                <br />
                <span className="experience-time">Summer 2016</span>
            </div>
            <div className="background-grid-title">
                <h1 className="section-title">Background</h1>
            </div>
        </div>
    )
}

export default Background;