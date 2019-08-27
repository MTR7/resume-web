import React, { Component } from 'react';
import Header from "./Components/Header";
import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import CyberSecurityActivities from './Components/CyberSecurityActivities';
import Work from './Components/Work';
import Volunteering from './Components/Volunteering';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <div className="Content">
            <About/>
            <Education/>
            <Skills/>
            <CyberSecurityActivities/>
            <Work/>
            <Projects/>
            <Volunteering/>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
