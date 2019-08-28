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
import { Paper } from '@material-ui/core';
import "./Styles/Cards.css";
import { isBrowser, isMobile } from "react-device-detect";

class App extends Component {
  
  getWidth() {
    if(isBrowser)
      return "70%";
    else
      return "100%";
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <div className="Content">
            <Paper className="CardsHolder" style={{width: this.getWidth()}}>
              <About/>
              <Education/>
              <Skills/>
              <CyberSecurityActivities/>
              <Work/>
              <Projects/>
              <Volunteering/>
            </Paper>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
