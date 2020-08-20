import React from 'react';
import Header from './Header/Header';
import NameBox from './NameBox/NameBox';
import ExperienceBox from './ExperienceBox/ExperienceBox';
import Background from './Background/Background';
import ProjectsBox from './ProjectsBox/ProjectsBox';
import Footer from './Footer/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NameBox></NameBox>
      <ExperienceBox></ExperienceBox>
      <Background></Background>
      <ProjectsBox></ProjectsBox>
      <Footer></Footer>
    </div>
  );
}

export default App;
