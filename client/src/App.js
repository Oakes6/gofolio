import React from 'react';
import NameBox from './NameBox/NameBox';
import ExperienceBox from './ExperienceBox/ExperienceBox';
import ProjectsBox from './ProjectsBox/ProjectsBox';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <NameBox></NameBox>
      <ExperienceBox></ExperienceBox>
      <ProjectsBox></ProjectsBox>
    </div>
  );
}

export default App;
