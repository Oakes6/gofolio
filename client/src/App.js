import React from 'react';
import NameBox from './NameBox/NameBox';
import ExperienceBox from './ExperienceBox/ExperienceBox';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <NameBox></NameBox>
      <ExperienceBox></ExperienceBox>
    </div>
  );
}

export default App;
