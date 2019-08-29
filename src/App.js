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
import "./Styles/Cards.css";
import { isBrowser } from "react-device-detect";
import Snackbar from '@material-ui/core/Snackbar';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

class App extends Component {
  
  getWidth() {
    if(isBrowser)
      return "70%";
    else
      return "100%";
  }

  getPadding() {
    if(isBrowser)
      return "1em";
    else
      return "0em";
  }

  getStyle() {
    return {
      width: this.getWidth(),
      paddingLeft: this.getPadding(),
      paddingRight: this.getPadding(),
    }
  }

  render() {
    configureAnchors({offset: -50, scrollDuration: 200})
    return (
      <div className="App">
        <ScrollableAnchor id={'home'}>
          <Header/>
        </ScrollableAnchor>
          <div className="Content" style={this.getStyle()}>
            <ScrollableAnchor id={'about'}>
              <About/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'education'}>
              <Education/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'skills'}>
              <Skills/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'cyberActivities'}>
              <CyberSecurityActivities/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'work'}>
              <Work/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'projects'}>
              <Projects/>
            </ScrollableAnchor>
            <ScrollableAnchor id={'volunteering'}>
              <Volunteering/>
            </ScrollableAnchor>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
